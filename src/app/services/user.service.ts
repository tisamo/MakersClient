import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {User} from '../Models/user';
import {Login} from '../Models/login';
import {Observable} from 'rxjs/index';
import {Role} from '../Models/role';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    return this.http.post(this.getBaseUrl() + 'users/register/', user);
  }

  login(login: Login) {
    console.log(this.getBaseUrl());
    return this.http.post(this.getBaseUrl() + 'users/login/', login);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.getBaseUrl() + 'users/myprofile/', );
  }

  hireMyBoy(role: Role): Observable<Role> {
    return this.http.post<Role>(this.getBaseUrl() + 'users/hire', role);
  }

  private getBaseUrl() {
    return environment.apiUrl;
  }
}
