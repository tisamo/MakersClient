import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {LogService} from '../../services/log.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public log: LogService,
  private router: Router) {

  }

  ngOnInit() {
  }

  logOut() {
  this.log.logged = false;
  this.router.navigate(['/']);
  }
}
