import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Project} from '../../Models/project';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [PostService],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  queryForm: FormGroup;

  constructor(private ps: PostService,
              private fb: FormBuilder,
              private http: HttpClient) {

  }

  selected: Project;

  ngOnInit() {
    this.getEveryPost();
    this.createForm();
  }

  openProject(i: number) {
    this.selected = this.projects[i];
    console.log(this.selected);
    localStorage.setItem('selected', JSON.stringify(this.selected));
  }

  createForm() {
    this.queryForm = this.fb.group({
      creator: new FormControl(),
      category: new FormControl(),
    });
  }

  getEveryPost() {
    this.ps.getAll().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    }, err => {
      console.log(err);
    });
  }

  getQueriedPosts() {
    const params = new HttpParams().set('creator', this.queryForm.controls['creator'].value)
      .set('category', this.queryForm.controls['category'].value);
    return this.http.get<Project[]>(this.getBaseUrl() + 'users/findQueriedPosts/', {
      params
    }).subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  getBaseUrl(): string {
    return environment.apiUrl;
  }
}
