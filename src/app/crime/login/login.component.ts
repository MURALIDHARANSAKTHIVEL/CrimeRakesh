import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { CrimeserviceService } from '../crimeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialogservice: NgbModal, private loginservice: CrimeserviceService, private router: Router) { }

  value: String;
  response: object;

  ngOnInit() {
  }

  loginform = new FormGroup({
    role: new FormControl(''),
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
  })

  message: any;
  onLoginSubmit(loginfailed) {
    let username1: any;
    sessionStorage.setItem("username", this.loginform.value.username);
    sessionStorage.setItem("role",this.loginform.value.role);
    if (this.loginform.value.role === "Admin") {
      this.loginservice.adminloginmethod(this.loginform.value)
        .subscribe(x => {
          console.log("Admin Login Success");
          this.dialogservice.dismissAll();
          this.router.navigate(['admin']);
        }, error => {
          if (error.status === 404) {
            this.message = error;
            console.log(this.message);
            this.dialogservice.open(loginfailed);
          }
        }
        )
    }
    else if (this.loginform.value.role === "Visitor") {
      this.loginservice.visitorloginmethod(this.loginform.value)
        .subscribe(x => {
          console.log("User Login success");
          this.dialogservice.dismissAll();
          this.router.navigate(['userlogin']);
        }
          , error => {
            if (error.status === 404) {
              this.message = error;
              console.log(this.message);
              this.dialogservice.open(loginfailed);
            }
          })
    }
    else if (this.loginform.value.role === "Police") {
      this.loginservice.policeloginmethod(this.loginform.value)
        .subscribe(x => {
          console.log("Police Login Success");
          this.dialogservice.dismissAll();
          this.router.navigate(['police']);
        }
          , error => {
            if (error.status === 404) {
              this.message = error;
              console.log(this.message);
              this.dialogservice.open(loginfailed);
            }
          })
    }
  }

  gotoregister() {
    this.dialogservice.dismissAll();
    this.router.navigate(['register']);
  }

  gotoforgot() {
    this.dialogservice.dismissAll();
  }


}
