import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    AddstudentRoutingModule
  ]
})
export class AddstudentModule { }
