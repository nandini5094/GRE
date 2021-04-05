import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreloginComponent } from './grelogin/grelogin.component';
import { GreregisterComponent } from './greregister/greregister.component';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';


const routes: Routes = [
  {path:'', component:GreloginComponent},
  {path:'login', component:GreloginComponent},
  {path:'register', component:GreregisterComponent},
  {path:'studentinfo', component:StudentinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
