import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './college/register-course/register-course.component';
import { RegisterAsignatureComponent } from './college/register-asignature/register-asignature.component';
import { RegisterStudentComponent } from './college/register-student/register-student.component';
import { RegisterTeacherComponent } from './college/register-teacher/register-teacher.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterTeacherComponent,
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
    path: 'registerAsignature',
    component: RegisterAsignatureComponent,
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
