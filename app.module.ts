import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { AwardsComponent } from './awards/awards.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms/cms.component';
import { NavbarService } from './navbar.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagmentComponent } from './managment/managment.component';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PermissionsComponent } from './permissions/permissions.component';
import { DeactivateService } from './deactivate.service';
import { DeactivateGuardService } from './deactivate-guard.service';



const routes: Routes = [

  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'awards', component: AwardsComponent, data: { animation: 'awards' } },
  { path: 'education', component: EducationComponent, data: { animation: 'education' }},
  { path: 'experience', component: ExperienceComponent, data: { animation: 'experience' } },
  { path: 'interests', component: InterestsComponent, data: { animation: 'interests' } },
  { path: 'permissions', component: PermissionsComponent, data: { animation: 'permissions' }, canDeactivate: [DeactivateGuardService] },
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' }, canDeactivate: [DeactivateGuardService] },
  { path: 'cms', component: CmsComponent },
  { path: 'managment', component: ManagmentComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'about', pathMatch: 'full', data: { animation: 'about' } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExperienceComponent,
    AboutComponent,
    EducationComponent,
    PermissionsComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    NotFoundComponent,
    CmsComponent,
    LoginComponent,
    ManagmentComponent,
    PdfViewerComponent,
  ],
  imports: [
    QuillModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgbModule
  ],

  providers: [AuthGuardService, AuthService, NavbarService, DeactivateService, DeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
