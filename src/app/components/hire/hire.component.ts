import {
  Component, OnInit
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PostService} from '../../services/post.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Project} from '../../Models/project';
import {CustomValidators} from 'ng2-validation';
@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  providers: [PostService],
  styleUrls: ['./hire.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({
          width: 0,
        }),
        animate(500, style({
          width: '100%',
        }))
      ])
    ]),
  ],
})

export class HireComponent implements OnInit {


  hire: string;
  search: string;
  poly: boolean;
  hireTime: boolean;
  searchTime: boolean;
  selectedName = '';
  hireFrom: FormGroup;
  addform = false;
  projects: Array<Project>;


  constructor(private ps: PostService,
              private fb: FormBuilder,
              private tst: ToastrService) {
    this.createForm();
    this.hire = 'col-12';
    this.search = 'col-12';
    this.poly = false;
    this.hireTime = false;
    this.searchTime = false;
    this.getAllposts();
  }

  ngOnInit() {
    console.log('szoste');
  }

  createForm() {
    this.hireFrom = this.fb.group({
      projectName: new FormControl('letsgo', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      category: new FormControl('', [Validators.required]),
      media: new FormControl('https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg', [Validators.required, CustomValidators.url, Validators.pattern('(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)')],),
    });
  }

  get f() {
    return this.hireFrom.controls;
  }

  getProjectName(i: number) {
    this.selectedName = this.projects[i].projectName;

    localStorage.setItem('selectedProject', JSON.stringify(this.projects[i]));
  }

  pickHire() {
    this.hireTime = true;
    this.searchTime = false;
    this.poly = true;
  }

  backout() {
    this.hire = 'col-6';
    this.search = 'col-6';
    this.hireTime = false;
    this.searchTime = false;
    this.poly = false;
  }

  sendProject() {
    const project = new Project(localStorage.getItem('userName'), this.hireFrom.controls['projectName'].value, this.hireFrom.controls['category'].value, this.hireFrom.controls['description'].value, this.hireFrom.controls['media'].value, []);
    this.ps.createPost(project).subscribe((data: Project) => {
      this.projects.push(data);
    }, err => {
      this.tst.error(err.error);
    });
  }

  getAllposts() {
    this.ps.getAllpost().subscribe(data => {
      this.projects = data;
      console.log(data);
      console.log(this.projects[0]);
    }, err => {
      this.tst.error(err);
    });
  }

  deleteProject() {
    this.ps.deletePost('first').subscribe(data => {
    }, err => {

    });
  }

}
