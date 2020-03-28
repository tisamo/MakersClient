import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Login} from '../../Models/login';
import {User} from '../../Models/user';
import {Profile} from '../../Models/profile';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent implements OnInit {


  constructor(private userService: UserService,
              private fb: FormBuilder,
              private http: HttpClient) {

  }

  showModalBox = false;
  header = '';
  image = '';
  description = '';
  city = '';
  role: string[] = [];
  profileForm: FormGroup;
  myProfile: Profile;
  user: User;

  public open() {
    if (0) {
      this.showModalBox = false;
    } else {
      // Open the modal
      this.showModalBox = true;
    }
  }

  get f() {
    return this.profileForm.controls;
  }

  ngOnInit() {
    this.getUser();
    this.createForm();
  }

  getUser() {
    this.myProfile = JSON.parse(localStorage.getItem('myprofile'));
    this.image = this.myProfile.image;
    this.header = this.myProfile.header;
    this.description = this.myProfile.description;
    this.city = this.myProfile.city;
    this.role = this.myProfile.role;
    console.log(this.myProfile);
  }

  createForm() {
    this.profileForm = this.fb.group({
      media: new FormControl(this.myProfile.image, [Validators.required, CustomValidators.url]),
      header: new FormControl(this.myProfile.header, [Validators.required, CustomValidators.url]),
      city: new FormControl(this.myProfile.city, [Validators.required]),
      role: new FormControl(this.myProfile.profiency, [Validators.required]),
      facebook: new FormControl(this.myProfile.facebook, CustomValidators.url),
      twitter: new FormControl(this.myProfile.twitter, CustomValidators.url),
      deviantart: new FormControl(this.myProfile.deviantart, CustomValidators.url),
      soundcloud: new FormControl(this.myProfile, CustomValidators.url),
      description: new FormControl(this.myProfile.soundcloud, [Validators.required, Validators.maxLength(1000)])
    });

  }

  getBaseUrl(): string {
    return environment.apiUrl;
  }

  setProfile() {
    this.myProfile.image = this.profileForm.controls['media'].value;
    this.myProfile.header = this.profileForm.controls['header'].value;
    this.myProfile.description = this.profileForm.controls['description'].value;
    const profile = this.myProfile;

    return this.http.post<User>(this.getBaseUrl() + 'users/modify/', profile, {}).subscribe((data: User) => {
      this.user = data;
      this.myProfile.description = data.image;
      this.myProfile.description = data.header;
      this.myProfile.description = data.description;
      this.myProfile.city = data.city;
      this.myProfile.profiency = data.profiency;
      console.log(this.user);
    });
  }


}
