import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }
  registerTeacher(teacher: any) {
    return this._http.post<any>(this.env + 'teacher/registerTeacher', teacher);
  }
  registerStudent(student: any) {
    return this._http.post<any>(this.env + 'student/registerStudent', student);
  }
  registerAsignature(asignature: any) {
    return this._http.post<any>(this.env + 'asignature/registerAsignature', asignature);
  }
  registerCourse(course: any) {
    return this._http.post<any>(this.env + 'course/registerCourse', course);
  }
  
  loggedIn() {
    return !!localStorage.getItem('token'); //!!para que devuelva un true si hay un token o false si no hay token
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
