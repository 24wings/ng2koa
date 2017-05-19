import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule ,Ng2BootstrapModule,DatepickerModule} from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { TeacherPageComponent } from './pages/teacher-page/teacher-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StudentNavComponent } from './com/student-nav/student-nav.component';
import { HomeNavComponent } from './com/home-nav/home-nav.component';
import { TeacherNavComponent } from './com/teacher-nav/teacher-nav.component';
import { TeacherMainComponent } from './pages/teacher-page/teacher-main/teacher-main.component';
import { ActiveMenuDirective } from './directives/active-menu.directive';
import { TeacherLessonComponent } from './pages/teacher-page/teacher-lesson/teacher-lesson.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ResumeDetailPageComponent } from './pages/resume-detail-page/resume-detail-page.component';
import { ResumeNewPageComponent } from './pages/resume-new-page/resume-new-page.component';
import { VisitorPipePipe } from './pipes/visitor-pipe.pipe';
import { NewVisitorComponent } from './test/visitor/new-visitor/new-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    TeacherPageComponent,
    AdminPageComponent,
    HomePageComponent,
    StudentNavComponent,
    HomeNavComponent,
    TeacherNavComponent,
    TeacherMainComponent,
    ActiveMenuDirective,
    TeacherLessonComponent,
    ResumePageComponent,
    ResumeDetailPageComponent,
    ResumeNewPageComponent,
  
    VisitorPipePipe,
  
    NewVisitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    Ng2BootstrapModule.forRoot(),
       ChartsModule,
       DatepickerModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:ResumePageComponent,
      children:[
        {path:'',component:ResumeNewPageComponent},
 {path:'detail',component:ResumeDetailPageComponent},
        
      ]},
      {path:'student',component:StudentPageComponent},
      {path:'teacher',component:TeacherPageComponent,children:[
        {
          path:'main',
          component:TeacherMainComponent
        },
        {
          path:'lesson',
          component:TeacherLessonComponent
        }
      ]},
      {path:'admin',component:AdminPageComponent}
      ,{
        path:'test/newvisitor',
        component:NewVisitorComponent  
      }
    ])
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
