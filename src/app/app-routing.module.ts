import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {HomeComponent} from './components/home/home.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import {ProfileComponent} from './components/profile/profile.component';
import {HireComponent} from './components/hire/hire.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SelectedPostComponent} from './components/selected-post/selected-post.component';
import {ChatComponent} from './components/chat/chat.component';
import {SelectedWorksComponent} from './components/selected-works/selected-works.component';
import {LoginComponent} from './components/login/login.component';
import {UpdatesComponent} from './components/updates/updates.component';
import {ApplicantsComponent} from './components/applicants/applicants.component';
import {ApplicantProfileComponent} from './components/applicant-profile/applicant-profile.component';
import {DisplayprojectjobsComponent} from './components/displayprojectjobs/displayprojectjobs.component';
import {ProjectJobSettingsComponent} from './components/project-job-settings/project-job-settings.component';
import {EditjobComponent} from './components/editjob/editjob.component';
import {ProjectUpdatesComponent} from './components/project-updates/project-updates.component';
import {EditUpdateItemComponent} from './components/edit-update-item/edit-update-item.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
  path: '', component: LoginComponent, pathMatch: 'full'

  },
  {
    path: 'hire',
    component: HireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'applications',
    component: UpdatesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName',
    component: ProjectComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'project/:projectName/project-settings',
    component: ProjectJobSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/project-settings/edit-job/:id',
    component: EditjobComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/project-updates',
    component: ProjectUpdatesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/project-updates/edit/:id',
    component: EditUpdateItemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/projectJobs',
    component: DisplayprojectjobsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/projectJobs/applicants/:role',
    component: ApplicantsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'project/:projectName/projectJobs/applicants/:role/applicant-profile/:userName',
    component: ApplicantProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'selected-work',
    component: SelectedWorksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'selected-project/:projectName',
    component: SelectedPostComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
