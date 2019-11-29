import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modelservice:NgbModal) { }

  ngOnInit() {
  }

  onsubmit(){
    this.modelservice.open(LoginComponent,{size:'lg'});
  }
}
