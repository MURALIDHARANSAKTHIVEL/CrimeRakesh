import { Component, OnInit } from '@angular/core';
import { CrimeserviceService } from '../crimeservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dialogservice:NgbModal,private registerservice:CrimeserviceService) { }

  ngOnInit() {
  }



  registerform=new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern('^[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),

   
      address1:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      country:new FormControl(''),
      pincode:new FormControl(''),
  

    
    adminusername: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern('^[a-zA-Z]+$')]),
    adminpassword:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])
  })




  hideadmin:Boolean=true;
  hideadmin1:Boolean=false;

  openadmin(){
    this.hideadmin=!this.hideadmin;
    this.hideadmin1=!this.hideadmin1;
  }




  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    console.log(inputChar);
    if (!pattern.test(inputChar)) {    
        event.preventDefault();
    }
}

userregister(){
  console.log(this.registerform.value)
  this.registerservice.userregistermethod(this.registerform.value).subscribe(x =>{
    console.log('result from API '+ JSON.stringify(x));
  })
}

adminregister(){
  if(this.registerform.value.adminusername!==''){
    this.registerservice.adminregistermethod(this.registerform.value).subscribe(x =>{
      console.log('result from Api' + JSON.stringify(x));
    })
  }
  
}

}
