import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './crime/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './crime/register/register.component';
import { AboutComponent } from './crime/about/about.component';
import { CrimeserviceService } from './crime/crimeservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './crime/home/home.component';
import { UserloginComponent } from './crime/userlogin/userlogin.component';

import { SafetytipsComponent } from './crime/safetytips/safetytips.component';
import { ManagepoliceComponent } from './crime/managepolice/managepolice.component';
import { CrimeModule } from './crime/crime.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,MatIconModule,NgbModule,
    CrimeModule,  AngularFontAwesomeModule,MatRadioModule,BrowserAnimationsModule
  ],
  providers: [CrimeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }


























