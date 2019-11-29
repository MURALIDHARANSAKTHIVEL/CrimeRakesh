import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrimeserviceService } from '../crimeservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-managepolice',
  templateUrl: './managepolice.component.html',
  styleUrls: ['./managepolice.component.css']
})
export class ManagepoliceComponent implements OnInit {

  constructor(private dialogservice:CrimeserviceService,private location:Location) { }

  ngOnInit() {
    
  }

  hideaddform=true;
  hidedeleteform=true;
  hidebuttons=false;
 
  ngAfterViewInit()
  {
    this.dialogservice.person=this.hidebuttons;
    sessionStorage.setItem("data",JSON.stringify( this.hidebuttons));
  }

  policeform=new FormGroup({
    name: new FormControl(''),
    policeid: new FormControl('',[Validators.required]),
    username: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern('^[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    address1:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    country:new FormControl(''),
    pincode:new FormControl(''),
  })

  deleteform=new FormGroup({
    policeid:new FormControl('')
  })

  addpolice(){
    this.hideaddform=false;
    this.hidedeleteform=true;
  }

  deletepolice(){
    this.hidedeleteform=false;
    this.hideaddform=true;
    
  }

  ngOnDestroy(){
    console.log("destroy");
  }

  goback(){
    this.location.back();
  }
}
