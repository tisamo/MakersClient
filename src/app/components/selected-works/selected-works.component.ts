import {Component, OnInit} from '@angular/core';
import {Roles} from '../../Models/Roles';
import {Role} from '../../Models/role';
import {PostService} from '../../services/post.service';
import {ToastrService} from 'ngx-toastr';
import {RoleSetup} from '../../Models/rolesetup';

@Component({
  selector: 'app-selected-works',
  templateUrl: './selected-works.component.html',
  styleUrls: ['./selected-works.component.scss'],
  providers: [PostService]
})
export class SelectedWorksComponent implements OnInit {
  exists = false;
  rolesArray: Role[] = [];
  people: string[] = [];

  constructor(private postService: PostService,
              private toastService: ToastrService) {

  }

  ngOnInit() {
    if (this.rolesArray !== null) {
      this.rolesArray = JSON.parse(localStorage.getItem('roles'));
      console.log(JSON.parse(localStorage.getItem('roles')));
      console.log(this.rolesArray);
      this.exists = true;
    }
  }

  apply(i: number) {
    const userName = localStorage.getItem('userName');
    if (this.rolesArray[i].people.indexOf(userName) > -1) {
      this.toastService.error('You already applied to this job');
    } else {
      this.rolesArray[i].people.push(userName);
      const psRoles = new RoleSetup(localStorage.getItem('proName'), this.rolesArray);
      this.postService.setRoles(psRoles).subscribe(data => {
          console.log(data);
        }, err => {
          console.log(err.error);
          this.toastService.error(err.error);
        }
      );
    }
  }
}
