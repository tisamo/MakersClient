import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {Requirement} from '../../Models/requirement';
import {Toast, ToastrModule, ToastrService} from 'ngx-toastr';
import {PostService} from '../../services/post.service';
import {Role} from '../../Models/role';
import {Project} from '../../Models/project';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.scss'],
  providers: [PostService]
})
export class EditjobComponent implements OnInit {
  jobForm: FormGroup;
  requirements: Requirement[] = [];
  project: Project = JSON.parse(localStorage.getItem('selectedProject'));
  requirementsFromForm: Requirement[] = [];
  jobToEdit: Role = JSON.parse(localStorage.getItem('jobToEdit'));

  constructor(private fb: FormBuilder,
              private tst: ToastrService,
              private pService: PostService,
              private location: Location) {
  }

  getRequirements() {
    for (const i in this.jobToEdit.requirements) {
      const requirement = new Requirement(i + 'requirement', i + 'requirementValue');
      this.jobForm.addControl(requirement.name, new FormControl(this.jobToEdit.requirements[i].name, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]));
      this.jobForm.addControl(requirement.value, new FormControl(this.jobToEdit.requirements[i].value, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]));
      this.requirements.push(requirement);
    }
  }

  ngOnInit() {
    this.createForm();
    console.log(this.jobToEdit);
    this.getRequirements();

  }

  get f() {
    return this.jobForm.controls;
  }

  addRequirements() {
    const i = this.requirements.length;
    if (i !== 7) {
      const requirement = new Requirement(i + 'requirement', i + 'requirementValue');
      this.requirements.push(requirement);
      this.jobForm.addControl(requirement.name, new FormControl('requirementName', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]));
      this.jobForm.addControl(requirement.value, new FormControl('value', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]));
    } else {
      this.tst.error('Only 7 requirements are allowed yet');
    }
  }

  editJob() {
    const projectName = this.project.projectName;
    for (const i in this.requirements) {
      const requirement = new Requirement(this.jobForm.controls[this.requirements[i].name].value, this.jobForm.controls[this.requirements[i].value].value);
      this.requirementsFromForm.push(requirement);
    }
    const role = new Role(projectName, this.jobToEdit.id, this.jobForm.controls['title'].value, [], '', this.jobForm.controls['media'].value, this.requirementsFromForm,
      this.jobForm.controls['description'].value);
    console.log(role);
    this.pService.updateSingleJob(role).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
    this.requirementsFromForm = [];
  }

  createForm() {
    this.jobForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      media: new FormControl('', [Validators.required, CustomValidators.url, Validators.minLength(3), Validators.maxLength(250)]),
      description: new FormControl('', [Validators.required]),
    });
  }

  back() {
    this.location.back();
  }


}
