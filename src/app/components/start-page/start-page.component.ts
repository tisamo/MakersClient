import {Component, OnInit, ViewChild} from '@angular/core';
import {Form} from '../../Models/form';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../Models/user';
import {UserService} from '../../services/user.service';
import {Login} from '../../Models/login';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {__await} from 'tslib';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  registerGroup: FormGroup;
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
              private router: Router) {
    this.createForm();
    this.addFormControl();
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

  showRegisterForm() {
    this.showRegisterFormBool = !this.showRegisterFormBool;
  }

  ngOnInit() {
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
    localStorage.setItem('login', 'login');
    const login = new Login(this.loginFormGroup.controls['login'].value, this.loginFormGroup.controls['password'].value);
    this.userService.login(login).subscribe((res) => {
      localStorage.setItem('token', res[Object.keys(res)[0]]);
      console.log(res[Object.keys(res)[0]]);
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
      console.log(res);
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
