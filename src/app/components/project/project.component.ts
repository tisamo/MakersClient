import {Component, OnInit} from '@angular/core';
import {Project} from '../../Models/project';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {UpdateArticle} from '../../Models/updateArticle';
import {ToastrService} from 'ngx-toastr';
import {CustomValidators} from 'ng2-validation';
import {ReqWithArray} from '../../Models/reqWithArray';
import {FormArray} from '../../Models/formarray';
import {ProjectUpdate} from '../../Models/projectUpdate';
import {Role} from '../../Models/role';
import {Settings} from '../../Models/settings';
import {DesignSetting} from '../../Models/designSetting';
import {Router, RouterModule} from '@angular/router';
import {RoleForm} from '../../Models/roleForm';
import {RoleSetup} from '../../Models/rolesetup';
import {Location} from '@angular/common';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [PostService]
})
export class ProjectComponent implements OnInit {
  project: Project = JSON.parse(localStorage.getItem('selectedProject'));
  updateForm: FormGroup;
  selected = false;
  settingsForm: FormGroup;
  designForm: FormGroup;
  manageUpdate = true;
  manageApplicants = false;
  roleToSave: Role = null;
  jobs: Role[] = [];
  formFor: RoleForm [] = [];
  reForm: FormGroup;
  roles: Role[] = [];
  settingsObj: Settings = null;
  Articles: UpdateArticle[] = [];
  int: number[] = [];
  settings = false;
  main = true;
  name = 'PROJECT';
  charArray: string[] = [];
  roleRoute = '';
  updates = false;
  preview = false;
  title = '';
  image = '';
  description = '';
  formArray: FormArray[] = [];

  constructor(private fb: FormBuilder,
              private ps: PostService,
              private tst: ToastrService,
              private location: Location) {
    this.formArray = [];
    this.settingsObj = this.project.projectSettings;
    this.createForm();
    console.log(this.reForm.value);
    console.log(this.project.projectSettings);
  }

  ngOnInit() {
    this.createUpdateForm();
    this.charArray = this.name.split('');
    this.jobs = this.project.lookingFor;
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    localStorage.setItem('pName', this.project.projectName);
    console.log(this.jobs);
    console.log(localStorage.getItem('pName'));
    this.createRoleForm();
  }

  createRoleForm() {
    for (const role in this.jobs) {
      const letsgo = new RoleForm('apply' + role, 'apply' + role + 'image');
      this.formFor.push(letsgo);
      this.settingsForm.addControl(letsgo.roleName, new FormControl('Job' + role, Validators.required));
      this.settingsForm.addControl(letsgo.roleImage, new FormControl('https://cdn.holdtoreset.com/wp-content/uploads/2017/01/Delirium.png', [Validators.required, CustomValidators.url, Validators.minLength(3), Validators.maxLength(250)]));
    }
    console.log(this.int);
    console.log(this.settingsForm.controls);
    console.log(this.formFor);
  }

  createForm() {
    this.designForm = this.fb.group({
      color: new FormControl(this.settingsObj.color),
      textColor: new FormControl(this.settingsObj.buttonTextColor),
      media: new FormControl(this.settingsObj.cover, [CustomValidators.url])
    });
    this.settingsForm = this.fb.group({});
    this.reForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required]),
      media: new FormControl('', [Validators.required, CustomValidators.url, Validators.minLength(3), Validators.maxLength(250)])
    });
  }

  get f() {
    return this.updateForm.controls;
  }

  get s() {
    return this.settingsForm.controls;
  }

  createUpdateForm() {
    this.updateForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required]),
      media: new FormControl('', [Validators.required, CustomValidators.url, Validators.minLength(3), Validators.maxLength(250)])
    })
    ;
  }

  initFormValue() {
    this.updateForm.controls['title'].setValue('');
    this.updateForm.controls['description'].setValue('');
    this.updateForm.controls['media'].setValue('');
  }


  delete(i: number) {
    const name = this.project.projectName;
    this.Articles.splice(i, 1);
    const req = new ReqWithArray(name, this.Articles);
    this.ps.createUpdatesForProject(req).subscribe(res => {
      this.tst.success('Project Deleted');
      this.initFormValue();
    }, err => {
      this.tst.success(err.statusText);
      this.initFormValue();
      console.log(err);
    });

  }


}
