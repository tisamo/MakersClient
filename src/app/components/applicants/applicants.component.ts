import {Component, OnInit} from '@angular/core';
import {Role} from '../../Models/role';
import {UserService} from '../../services/user.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../../Models/user';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {
  role: Role = JSON.parse(localStorage.getItem('selectedJob'));
  people: string[] = [];
  users: User[] = [];

  constructor(private usr: UserService,
              private http: HttpClient) {

  }

  ngOnInit() {
    console.log(this.role);
    this.getPeople();
    console.log(this.people);
    this.getUsers();
  }

  getPeople() {
    for (const i in this.role.people) {
      console.log(i);
      if (this.role.people[i].length > 2) {
        this.people.push(this.role.people[i]);
      }
    }
  }

  getApplicantProfile(i: number) {
    localStorage.setItem('applicant', JSON.stringify(this.users[i]));
    localStorage.getItem('applicant');
  }

  getUsers() {
    const actorList = JSON.stringify(this.people);
    const params = new HttpParams().set('list', actorList);
    console.log(params);
    this.http.get('http://localhost:3000/users/applicants', {params: params}).subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);

    }, err => {
      console.log(err);
    });
  }
}
