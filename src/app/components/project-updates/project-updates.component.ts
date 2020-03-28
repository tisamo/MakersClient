import {Component, OnInit} from '@angular/core';
import {UpdateArticle} from '../../Models/updateArticle';
import {PostService} from '../../services/post.service';
import {HttpParams} from '@angular/common/http';
import {Project} from '../../Models/project';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {formatDate} from '@angular/common';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-project-updates',
  templateUrl: './project-updates.component.html',
  styleUrls: ['./project-updates.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ProjectUpdatesComponent implements OnInit {
  updates: UpdateArticle[] = [];
  updating = true;
  project: Project = JSON.parse(localStorage.getItem('selectedProject'));
  updateForm: FormGroup;
  windowWidth;
  updateTocheck: UpdateArticle;
  update: UpdateArticle;

  constructor(private pService: PostService,
              private fb: FormBuilder,
              private tst: ToastrService) {
  }

  ngOnInit() {
    this.createform();
    this.getUpdates();
  }

  onWindowResize(event) {
    this.windowWidth = event.target.innerWidth;
  }



  createform() {
    this.updateForm = this.fb.group({
      title: new FormControl('ssssssssss', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      description: new FormControl('sssssssss', [Validators.required, Validators.maxLength(1000)]),
      media: new FormControl('https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/02/26084257/Bard_0.jpg', [Validators.required, CustomValidators.url, Validators.minLength(1)]),
      youtube: new FormControl('https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/02/26084257/Bard_0.jpg', [Validators.required, CustomValidators.url, Validators.minLength(1)]),
      motto: new FormControl('sssssssss', [Validators.required]),
    });
  }

  checkUpdates() {
    this.updating = false;
  }

  get f() {
    return this.updateForm.controls;
  }

  back() {
    this.updating = true;
  }

  deleteUpdateItem(i: number) {
    const update = this.updates[i];
    const param = new HttpParams().set('projectName', this.project.projectName);
    this.pService.deleteUpdate(update, param).subscribe(data => {
      console.log(data);
      this.tst.success('Update Deleted');
      this.updates.splice(i, 1);
    }, err => {
      console.log(err);

    });
  }

  pushUpdate() {
    let id;
    if (this.updates.length > 0) {
      id = this.updates[this.updates.length - 1].id + 1;
    } else if (this.updates.length === 0) {
      id = this.updates.length;
    }
    const date = formatDate(new Date(), 'yyyy-MM-dd hh:mm', 'en');

    console.log(date);
    if (this.updates.length === 16) {
      this.tst.error('Maximum 16 updates');
    }
    else {
      const update = new UpdateArticle(id, date,
        this.updateForm.controls['title'].value, this.updateForm.controls['description'].value,
        this.updateForm.controls['youtube'].value, this.updateForm.controls['media'].value,
        this.updateForm.controls['motto'].value);
      const params = new HttpParams().set('project', this.project.projectName);
      this.pService.updateProject(update, params).subscribe(data => {
        console.log(data);
        this.tst.success('Update Created');
        this.updates.push(update);
      }, err => {
        console.log(err);
      });
    }
  }

  getUpdateItem(i: number) {
    this.updateTocheck = this.updates[i];
    localStorage.setItem('selectedUpdate', JSON.stringify(this.updateTocheck));
    console.log(localStorage.getItem('selectedUpdate'));

  }

  getUpdates() {
    const params = new HttpParams().set('project', this.project.projectName);
    this.pService.getUpdates(params).subscribe(data => {
      this.updates = data;
      console.log('nazsa');
    }, err => {
      console.log(err);
    });
  }
}
