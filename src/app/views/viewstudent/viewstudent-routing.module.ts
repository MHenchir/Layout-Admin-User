import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [{
  path:'',component:ViewstudentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewstudentRoutingModule { }
