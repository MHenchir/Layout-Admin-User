import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'home',loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)},
    {path:'contact',loadChildren:()=>import('./views/contact/contact.module').then(m=>m.ContactModule)},
    {path:'about',loadChildren:()=>import('./views/about/about.module').then(m=>m.AboutModule)}

  ]},

  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'addproduct',loadChildren:()=>import('./views/addproduct/addproduct.module').then(m=>m.AddproductModule)},
    {path:'addstudent',loadChildren:()=>import('./views/addstudent/addstudent.module').then(m=>m.AddstudentModule)}

  ]},

  {path:'user',component:UserLayoutComponent,children:[
    {path:'myhome',loadChildren:()=>import('./views/myhome/myhome.module').then(m=>m.MyhomeModule)},
    {path:'viewproduct',loadChildren:()=>import('./views/viewproduct/viewproduct.module').then(m=>m.ViewproductModule)},
    {path:'viewstudent',loadChildren:()=>import('./views/viewstudent/viewstudent.module').then(m=>m.ViewstudentModule)},
    {path:'viewcards',loadChildren:()=>import('./views/viewcards/viewcards.module').then(m=>m.ViewcardsModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
