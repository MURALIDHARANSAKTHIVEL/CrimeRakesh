import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { SafetytipsComponent } from './safetytips/safetytips.component';
import { ManagepoliceComponent } from './managepolice/managepolice.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterloginComponent } from './registerlogin/registerlogin.component';
import { PoliceComponent } from './police/police.component';
import { MatIconModule } from '@angular/material/icon';
import { ForgotComponent } from './forgot/forgot.component';
import { ContactComponent } from './contact/contact.component';
import { MatRadioModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [LoginComponent, RegisterComponent, AboutComponent, HomeComponent, UserloginComponent, ManagepoliceComponent,RegisterloginComponent,ManagepoliceComponent, SafetytipsComponent, PoliceComponent, ForgotComponent, ContactComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,NgbModule,AppRoutingModule,MatIconModule,MatSidenavModule,BrowserAnimationsModule
  ],
  exports : [LoginComponent, RegisterComponent, AboutComponent, HomeComponent, UserloginComponent,ManagepoliceComponent, RegisterloginComponent,ManagepoliceComponent, SafetytipsComponent,PoliceComponent,ForgotComponent,ContactComponent]

})
export class CrimeModule { 
  
}
