import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HomeComponent} from './components/home/home.component';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {HeaderComponent} from './components/header/header.component';
import {ProfileComponent} from './components/profile/profile.component';
import {InterceptorConfig} from './services/HttpInterceptor/IntercepterConfig';
import {SettingsComponent} from './components/settings/settings.component';
import {ChatComponent} from './components/chat/chat.component';
import {HireComponent} from './components/hire/hire.component';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from './components/project/project.component';
import {CustomFormsModule} from 'ng2-validation';
import {ProjectsComponent} from './components/projects/projects.component';
import {SelectedPostComponent} from './components/selected-post/selected-post.component';
import {ChatService} from './services/chat-service';
import {SelectedWorksComponent} from './components/selected-works/selected-works.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProfileModalComponent} from './components/modals/profile-modal/profile-modal.component';
import {UpdatesComponent} from './components/updates/updates.component';
import {UnderconstructionComponent} from './components/underconstruction/underconstruction.component';
import {ApplicantsComponent} from './components/applicants/applicants.component';
import {ApplicantProfileComponent} from './components/applicant-profile/applicant-profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DisplayprojectjobsComponent} from './components/displayprojectjobs/displayprojectjobs.component';
import {ProjectJobSettingsComponent} from './components/project-job-settings/project-job-settings.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {EditjobComponent} from './components/editjob/editjob.component';
import {PostService} from './services/post.service';
import {ProjectUpdatesComponent} from './components/project-updates/project-updates.component';
import {EditUpdateItemComponent} from './components/edit-update-item/edit-update-item.component';


export function getToken() {
  if (localStorage.getItem('token') != null)  return localStorage.getItem('token');
  else {
    return 'zszaaszasz';
  }

}


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    SettingsComponent,
    ChatComponent,
    HireComponent,
    ProjectComponent,
    ProjectsComponent,
    SelectedPostComponent,
    SelectedWorksComponent,
    LoginComponent,
    NavbarComponent,
    ProfileModalComponent,
    UpdatesComponent,
    UnderconstructionComponent,
    ApplicantsComponent,
    ApplicantProfileComponent,
    DisplayprojectjobsComponent,
    ProjectJobSettingsComponent,
    EditjobComponent,
    ProjectUpdatesComponent,
    EditUpdateItemComponent,

  ],

  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxDatatableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:3000', 'https://makers-makers.herokuapp.com/']
      }
    }),
    BrowserModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService, AuthService, AuthGuardService,
    InterceptorConfig,
    ChatService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
