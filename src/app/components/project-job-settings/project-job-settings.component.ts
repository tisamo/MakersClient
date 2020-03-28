import {Component, OnInit} from '@angular/core';
import {Role} from '../../Models/role';
import {PostService} from '../../services/post.service';
import {Project} from '../../Models/project';
import {HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-project-job-settings',
  templateUrl: './project-job-settings.component.html',
  styleUrls: ['./project-job-settings.component.scss']
})
export class ProjectJobSettingsComponent implements OnInit {
  p = 1;
  roles: Role[] = [];
  project: Project = JSON.parse(localStorage.getItem('selectedProject'));

  constructor(private pService: PostService) {

  }

  ngOnInit() {
    this.getRoles();
    console.log(this.roles);
  }

  addRole() {
  }

  modifySelectedJob(i: number) {
    localStorage.setItem('jobToEdit', JSON.stringify(this.roles[i]));
  }

  getRoles() {

    const params = new HttpParams().set('projectName', this.project.projectName);
    console.log(params);
    this.pService.getRoles(params).subscribe(data => {
      this.roles = data;
      console.log(data);
    });
  }

  pushJobToArray() {
    let id;
    if (this.roles.length > 0) {
      id = this.roles[this.roles.length - 1].id + 1;
    } else if (this.roles.length === 0) {
      id = this.roles.length;
    }
    const role = new Role(this.project.projectName, id, 'new', [], '-', 'https://i.kinja-img.com/gawker-media/image/upload/t_original/pse43qhaahngtarjkqso.jpg', [], '');
    this.pService.pushRoleToDatabase(role).subscribe(data => {
      this.roles.push(role);
    }, err => {
      console.log(err);
    });
  }

  deleteJob(i: number) {
    const role = this.roles[i];
    this.pService.deleteSingleJob(role).subscribe((data: Project) => {
      console.log(data);
      this.roles.splice(i, 1);

    }, err => {
      console.log(err);
    });
  }
}
