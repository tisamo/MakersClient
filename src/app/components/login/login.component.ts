import {Component, OnInit} from '@angular/core';
import {Login} from '../../Models/login';
import {User} from '../../Models/user';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Form} from '../../Models/form';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerGroup: FormGroup;
  notLoggedin = true;
  state;
  height = window.innerHeight;
  loginFormGroup: FormGroup;
  showRegisterFormBool = false;
  formArray: Form[] = [{name: 'First name', id: 'firstName', type: 'text'},
    {name: 'Last name', id: 'lastName', type: 'text'},
    {name: 'Username', id: 'userName', type: 'text'},
    {name: 'Email', id: 'email', type: 'email'},
    {name: 'Password', id: 'password', type: 'password'},
    {name: 'Password again', id: 'password2', type: 'password'}
  ];

  constructor(private toastR: ToastrService,
              private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private log: LogService) {
    this.log.logged = false;
    this.createForm();
    this.addFormControl();
  }

  ngOnInit() {

  }

  adjustScreen() {

  }

  createForm() {
    this.registerGroup = this.fb.group({});
    this.loginFormGroup = this.fb.group({});
  }

  addFormControl() {
    this.loginFormGroup.addControl('login', new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]));
    this.loginFormGroup.addControl('password', new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]));
    for (const i of this.formArray) {
      this.registerGroup.addControl(i.id, new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]));
    }
  }

  toast(res) {
    this.toastR.error(res);
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  showRegisterForm() {
    this.showRegisterFormBool = !this.showRegisterFormBool;
  }


  json2array(json) {
    const result = [];
    const keys = Object.keys(json);
    keys.forEach((key) => {
      result.push(json[key]);
    });
    return result;
  }

  login() {

    const login = new Login(this.loginFormGroup.controls['login'].value, this.loginFormGroup.controls['password'].value);
    localStorage.setItem('login', JSON.stringify(login));
    this.userService.login(login).subscribe((res) => {
      localStorage.setItem('token', res[Object.keys(res)[0]]);
      console.log(res[Object.keys(res)[0]]);
      this.log.logged = true;
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      if (!err.error.text) {
        this.toast(err.error);
      }
      else {
        this.toast(err.error.text);
      }
    });
  }

  createUser() {
    const user2 = new User(this.registerGroup.controls['firstName'].value, this.registerGroup.controls['lastName'].value,
      this.registerGroup.controls['userName'].value,
      this.registerGroup.controls['email'].value,
      this.registerGroup.controls['password'].value,
      this.registerGroup.controls['password2'].value);
    this.userService.create(user2).subscribe((res) => {
      this.toastR.success('User has been added to the database');
      if (res === null) {
        this.toastR.success('User has been added to the database');
      } else {
        const array = this.json2array(res);
        for (const i in array) {
          this.toastR.error(array[i]);
        }
      }
    }, error => {
      this.toast(error.error);
    });
  }


}
