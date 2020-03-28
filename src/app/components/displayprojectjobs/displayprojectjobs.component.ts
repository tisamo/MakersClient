import {Component, HostListener, OnInit} from '@angular/core';
import {Role} from '../../Models/role';


@Component({
  selector: 'app-displayprojectjobs',
  templateUrl: './displayprojectjobs.component.html',
  styleUrls: ['./displayprojectjobs.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class DisplayprojectjobsComponent implements OnInit {
  roles: Role[] = JSON.parse(localStorage.getItem('jobs'));
  job: Role = null;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  windowWidth = window.innerWidth;

  constructor() {
  }

  onWindowResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  ngOnInit() {
  }

  log() {
  }

  getRole(i: number) {
    this.job = this.roles[i];
    localStorage.setItem('selectedJob', JSON.stringify(this.job));

  }
}
