import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }
  registerStudent(student: any) {
    return this._http.post<any>(this.env + 'student/registerStudent', student);
  }
  loggedIn() {
    return !!localStorage.getItem('token'); //!!para que devuelva un true si hay un token o false si no hay token
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
