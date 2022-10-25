import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyhomeRoutingModule } from './myhome-routing.module';
import { MyhomeComponent } from './myhome/myhome.component';


@NgModule({
  declarations: [
    MyhomeComponent
  ],
  imports: [
    CommonModule,
    MyhomeRoutingModule
  ]
})
export class MyhomeModule { }
