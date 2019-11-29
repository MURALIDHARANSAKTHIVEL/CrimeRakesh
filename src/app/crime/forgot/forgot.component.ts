import { Component, OnInit } from '@angular/core';
import { CrimeserviceService } from '../crimeservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {



  constructor(private dialogservice: CrimeserviceService, private modelservice: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  response: any;
  hidepassword = false;
  hidesubmit = false;
  hidebuttons = false;

  usernameform = new FormGroup({
    role: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    password1: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
  })

  // usernamesubmit(loginfailed) {
  //   console.log(this.usernameform.value.role);
  //   if (this.usernameform.value.role === "Visitor") {
  //     this.dialogservice.checkusernamevisitor(this.usernameform.value).subscribe(data => {
  //       console.log(data);
  //       this.response = data;
  //       if (this.response === null) { this.modelservice.open(loginfailed); }
  //       else {
  //         console.log("User username success");
  //         this.hidesubmit = true;
  //         this.hidepassword = false;
  //         this.hidebuttons = true;
  //       }
  //     })
  //   }
  //   else if (this.usernameform.value.role === "Admin") {
  //     this.dialogservice.checkusernameadmin(this.usernameform.value).subscribe(data => {
  //       console.log(data);
  //       this.response = data;
  //       if (this.response === null) { this.modelservice.open(loginfailed); }
  //       else {
  //         console.log("Admin Username success");
  //         this.hidesubmit = true;
  //         this.hidepassword = false;
  //         this.hidebuttons = true;
  //       }
  //     })
  //   }
  //   else if (this.usernameform.value.role === "Police") {
  //     this.dialogservice.checkusernamepolice(this.usernameform.value).subscribe(data => {
  //       console.log(data);
  //       this.response = data;
  //       if (this.response === null) { this.modelservice.open(loginfailed); }
  //       else {
  //         console.log("Police Username success");
  //         this.hidesubmit = true;
  //         this.hidepassword = false;
  //         this.hidebuttons = true;
  //       }
  //     })
  //   }
  // }


  submitpassword(registered, loginfailed) {
    console.log(this.usernameform.value.role);
    if (this.usernameform.value.role === "Visitor") {
      if (this.usernameform.value.password === this.usernameform.value.password1) {
        this.dialogservice.updatevisitorpassword(this.usernameform.value).subscribe(data => {
          console.log(data);
          this.response = data;
          if (this.response === null) { this.modelservice.open(loginfailed); }
          else {
            console.log("Police Username success");
            alert("Visitor Password Updated");
            this.router.navigate(['']);
          }
        })
      }
      else { alert("Both passwords Are Different"); }
    }
    else if (this.usernameform.value.role === "Admin") {
      if (this.usernameform.value.password === this.usernameform.value.password1) {
        this.dialogservice.updateadminpassword(this.usernameform.value).subscribe(data => {
          console.log(data);
          this.response = data;
          if (this.response === null) { this.modelservice.open(loginfailed); }
          else {
            console.log("Police Username success");
            alert("Admin Password Updated");
            console.log("Admin Username success");
            this.router.navigate(['']);
          }
        })
      } else { alert("Both passwords Are Different"); }
    }
    else if (this.usernameform.value.role === "Police") {
      if (this.usernameform.value.password === this.usernameform.value.password1) {
        this.dialogservice.updatepolicepassword(this.usernameform.value).subscribe(data => {
          console.log(data);
          this.response = data;
          if (this.response === null) { this.modelservice.open(loginfailed); }
          else {
            console.log("Police Username success");
            alert("Police Password Updated");
            console.log("Police Username success");
            this.router.navigate(['']);
          }
        })
      } else { alert("Both passwords Are Different"); }
    }
  }
}
