import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './college/register-course/register-course.component';
import { RegisterMatterComponent } from './college/register-matter/register-matter.component';
import { RegisterStudentComponent } from './college/register-student/register-student.component';
import { RegisterTeacherComponent } from './college/register-teacher/register-teacher.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent,
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path: 'registerMatter',
    component: RegisterMatterComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  }
  ,{
    path:"login",
    component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
