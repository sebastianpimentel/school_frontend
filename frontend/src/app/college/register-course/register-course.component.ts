import { Component, OnInit } from '@angular/core';

import { CollegeService } from '../../services/college.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent implements OnInit {
  registerData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _collegeService: CollegeService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {}

  registerCourse() {}

  openSnackBarSuccesfull() {}

  openSnackBarError() {}
}
