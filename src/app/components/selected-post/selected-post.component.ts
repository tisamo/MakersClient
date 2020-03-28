import {Component, OnInit} from '@angular/core';
import {Project} from '../../Models/project';
import {UpdateArticle} from '../../Models/updateArticle';
import {animate, style, transition, trigger} from '@angular/animations';
import {post} from 'selenium-webdriver/http';
import {Roles} from '../../Models/Roles';
import {log} from 'util';
import {Role} from '../../Models/role';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class SelectedPostComponent implements OnInit {
  post: Project = JSON.parse(localStorage.getItem('selected'));
  roles: Role[] = this.post.lookingFor;
  articlePost: UpdateArticle[] = [];
  background = '';
  color = this.post.projectSettings.color;

  constructor() {
    console.log(this.roles);
    console.log(this.post);
    this.getUpdates();
    this.background = this.post.media;
    localStorage.setItem('proName', this.post.projectName);
    localStorage.setItem('roles', JSON.stringify(this.roles));
    console.log(this.color);
   }

  ngOnInit() {

  }

  getUpdates() {
  }
}
