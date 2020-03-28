import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Project} from '../Models/project';

import {Observable} from 'rxjs/index';
import {UpdateArticle} from '../Models/updateArticle';
import {ReqWithArray} from '../Models/reqWithArray';
import {ProjectReq} from '../Models/projectSettingsReq';
import {ProjectUpdate} from '../Models/projectUpdate';
import {Roles} from '../Models/Roles';
import {Settings} from '../Models/settings';
import {DesignSetting} from '../Models/designSetting';
import {Role} from '../Models/role';
import {RoleSetup} from '../Models/rolesetup';


export class PostService {

  constructor(private http: HttpClient) {
  }

  createPost(project: Project) {
    return this.http.post(this.getBaseUrl() + 'users/project/', project);
  }

  setRoles(role: RoleSetup) {
    return this.http.post(this.getBaseUrl() + 'posts/setRoles/', role);
  }


  createUpdatesForProject(update: ReqWithArray): Observable<Project> {
    return this.http.post<Project>(this.getBaseUrl() + 'users/createnews/', update);
  }

  setProjectSettings(settings: DesignSetting): Observable<Project> {
    return this.http.post<Project>(this.getBaseUrl() + 'users/setProjectSettings/', settings);
  }

  getAllpost(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getBaseUrl() + 'users/findAllPostFromUser/');
  }

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getBaseUrl() + 'users/findAllPost/');

  }

  updateSingleJob(role: Role) {
    return this.http.post(this.getBaseUrl() + 'posts/modifySingleJob/', role);
  }

  deleteSingleJob(role: Role) {
    return this.http.post(this.getBaseUrl() + 'posts/deleteSingleJob/', role);
  }

  deleteUpdate(id: UpdateArticle, params: HttpParams) {
    return this.http.post(this.getBaseUrl() + 'posts/deleteUpdate/', id, {params});
  }

  editItem(update: UpdateArticle, params: HttpParams) {
    return this.http.post(this.getBaseUrl() + 'posts/editUpdate/', update, {params});
  }

  deleteJob() {
  }

  getQueriedPosts(): Observable<Project[]> {
    return this.http.get<Project[]>(this.getBaseUrl() + 'users/findQueriedPosts/');

  }

  updateProject(update: UpdateArticle, params: HttpParams) {
    return this.http.post(this.getBaseUrl() + 'posts/pushUpdate/', update, {params});
  }

  getUpdates(params: HttpParams): Observable<UpdateArticle[]> {
    return this.http.get<UpdateArticle[]>(this.getBaseUrl() + 'posts/getUpdates/', {params});
  }

  getRoles(params: HttpParams): Observable<Role[]> {
    return this.http.get<Role[]>(this.getBaseUrl() + 'posts/getRoles/', {params});
  }

  pushRoleToDatabase(role: Role): Observable<Role> {
    return this.http.post<Role>(this.getBaseUrl() + 'posts/pushRoleToDatabase', role);
  }

  deletePost(target: string) {
    return this.http.post(this.getBaseUrl() + 'users/deletepost/', target);
  }

  private getBaseUrl() {
    return environment.apiUrl;
  }
}
