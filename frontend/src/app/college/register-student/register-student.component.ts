import { Component, OnInit } from '@angular/core';

import { CollegeService } from '../../services/college.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2;

  constructor(
    private _collegeService: CollegeService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {}

 
  registerStudent() {    if (
    !this.registerData.name ||
    !this.registerData.identify ||
    !this.registerData.email ||
    !this.registerData.password
  ) {
    console.log('Failed process: Incomplete data');
    this.message = 'Failed process: Incomplete data';
    this.openSnackBarError();
    this.registerData = {};
  } else {
    this._collegeService.registerStudent(this.registerData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        this._router.navigate(['/registerCourse']);
        this.message = 'Successfull user registration';
        this.openSnackBarSuccesfull();
        this.registerData = {};
      },
      (err) => {
        console.log(err);
        this.message = err.error;
        this.openSnackBarError();
      }
    );
  }
}

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass:['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass:['style-snackBarFalse']
    });
  }
}