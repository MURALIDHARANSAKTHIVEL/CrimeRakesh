import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';
import { LoginComponent } from './crime/login/login.component';
import { RegisterComponent } from './crime/register/register.component';
import { ManagepoliceComponent } from './crime/managepolice/managepolice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crimemanagement';

  constructor(private modelservice:NgbModal){}


  onsubmit(){
    this.modelservice.open(LoginComponent, { size: 'lg' });
  }



}
