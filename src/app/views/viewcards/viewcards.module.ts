import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcardsRoutingModule } from './viewcards-routing.module';
import { ViewcardsComponent } from './viewcards/viewcards.component';


@NgModule({
  declarations: [
    ViewcardsComponent
  ],
  imports: [
    CommonModule,
    ViewcardsRoutingModule
  ]
})
export class ViewcardsModule { }
