import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {HttpParams} from '@angular/common/http';
import {PostService} from '../../services/post.service';
import {UpdateArticle} from '../../Models/updateArticle';

@Component({
  selector: 'app-edit-update-item',
  templateUrl: './edit-update-item.component.html',
  styleUrls: ['./edit-update-item.component.scss']
})
export class EditUpdateItemComponent implements OnInit {
  updateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private pService: PostService) {
  }

  ngOnInit() {
    this.createform();
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

  get f() {
    return this.updateForm.controls;
  }

  editItem() {
    const item = JSON.parse(localStorage.getItem('selectedUpdate'));
    console.log(localStorage.getItem('pName'));
    const update= new UpdateArticle(item.id, item.date, this.updateForm.controls['title'].value, this.updateForm.controls['description'].value,
      this.updateForm.controls['media'].value, this.updateForm.controls['youtube'].value, this.updateForm.controls['motto'].value);
    const params = new HttpParams().set('project', localStorage.getItem('pName'));
    this.pService.editItem(update, params).subscribe(data => {
      console.log(data);

    }, err => {
      console.log(err);
    });
  }
}
