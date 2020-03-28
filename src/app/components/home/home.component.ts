import {Component, OnInit} from '@angular/core';
import {Profile} from '../../Models/profile';
import {UserService} from '../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormArray} from '../../Models/formarray';
import {LogService} from '../../services/log.service';
import {HttpParams} from '@angular/common/http';
import {Login} from '../../Models/login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-360deg)'})),
      transition('rotated => default', animate('1000ms ease-out')),
      transition('default => rotated', animate('1000ms ease-in'))
    ]),
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ]), trigger('slideInOut', [
      transition(':enter', [
        style({
          left: '100%'
        }),
        animate(500, style({
          left: '0 '
        }))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({
          right: '100%'
        }),
        animate(500, style({
          right: '0 '
        }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService,
              private log: LogService) {
    this.log.logged = true;
    this.getUser();
  }

  todo: FormArray[] = [{
    name: 'Design',
    formControlName: 'Since im not a designer im trying out a lot of things longstoryhort need better design'
  },
    {name: 'Component for groups', formControlName: 'This is one of the most impontant things i have to implement'},
    {name: 'Responsitivity', formControlName: 'It can happen the app isnt responsive somewhere.'},
    {name: 'Chat', formControlName: 'Enabling group members to chat with eachother'},
    {name: 'Help Service', formControlName: 'Q/A service Bot where you can question anything'}];
  string = 'default';
  myProfile: Profile;
  login: Login;

  ngOnInit() {

  }

  getUser() {
    this.userService.getUser().subscribe(res => {
      this.myProfile = new Profile(res.firstName, res.lastName, res.userName, res.settings, res.profiency, res.city, res.description, res.role, res.header, res.image, res.facebook, res.twitter, res.deviantart, res.soundcloud);
      localStorage.setItem('userName', this.myProfile.userName);
      console.log(localStorage.getItem('userName'));
      localStorage.setItem('myprofile', JSON.stringify(this.myProfile));
      console.log(this.myProfile);
    }, err => {
      console.log(err);
    });
  }

}
