import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [{
  path:'',component:ViewproductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewproductRoutingModule { }
