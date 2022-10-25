import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewproductRoutingModule } from './viewproduct-routing.module';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [
    ViewproductComponent
  ],
  imports: [
    CommonModule,
    ViewproductRoutingModule
  ]
})
export class ViewproductModule { }
