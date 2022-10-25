import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcardsComponent } from './viewcards/viewcards.component';

const routes: Routes = [{
  path:'',component:ViewcardsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcardsRoutingModule { }
