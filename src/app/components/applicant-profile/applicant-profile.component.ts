import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {User} from '../../Models/user';
import {Galleryitem} from '../../Models/Galleryitem';
import {Location} from '@angular/common';
import {UserService} from '../../services/user.service';
import {Role} from '../../Models/role';
@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.scss']
})
export class ApplicantProfileComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('applicant'));
  workOne: Galleryitem[] = [
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
    {
      srcUrl: 'https://bindingofisaacrebirth.gamepedia.com/Bosses',
      description: 'Best game ever',
      url: 'https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png'
    },
  ];

  constructor(private location: Location,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

  hire() {
    const role = JSON.parse(localStorage.getItem('role'));
    this.userService.hireMyBoy(role).subscribe(data => {

    });
  }
}


