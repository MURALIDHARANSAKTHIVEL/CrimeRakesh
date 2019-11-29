import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './crime/login/login.component';
import { RegisterComponent } from './crime/register/register.component';
import { AboutComponent } from './crime/about/about.component';
import { HomeComponent } from './crime/home/home.component';
import { UserloginComponent } from './crime/userlogin/userlogin.component';

import { SafetytipsComponent } from './crime/safetytips/safetytips.component';
import { ManagepoliceComponent } from './crime/managepolice/managepolice.component';
import { CrimeModule } from './crime/crime.module';
import { RegisterloginComponent } from './crime/registerlogin/registerlogin.component';
import { PoliceComponent } from './crime/police/police.component';
import { ForgotComponent } from './crime/forgot/forgot.component';
import { ContactComponent } from './crime/contact/contact.component';
import { AdminauthguardGuard } from './adminauthguard.guard';



const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'safetytips',component:SafetytipsComponent},
  {path:'admin',component:RegisterloginComponent, canActivate:[AdminauthguardGuard]},
  {path:'home',component:HomeComponent},
  {path:'police',component:PoliceComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'contact',component:ContactComponent}

 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
