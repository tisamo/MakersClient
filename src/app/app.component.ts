import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Form} from './Models/form';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';
import {Login} from './Models/login';
import {User} from './Models/user';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {LogService} from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-360deg)'})),
      transition('rotated => default', animate('1000ms ease-out')),
      transition('default => rotated', animate('1000ms ease-in'))
    ])
  ]
})
export class AppComponent {
  show: boolean;

  constructor(public log: LogService) {
    this.log.logged = true;
  }


}
