import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CrimeserviceService } from '../crimeservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {

  constructor(private router: Router, private dialogservice: CrimeserviceService, private s1: DomSanitizer, private modelservice: NgbModal) { }

  ngOnInit() {
    this.username1 = sessionStorage.getItem("username");
    console.log(this.username1);
    this.role = sessionStorage.getItem("value");
    this.role = "Message is From" + this.role;
    console.log(this.role);
  }
  username1: any;
  role: any;
  currentRate = 0;
  hidefeedbackform = true;
  hideimage = false;
  message = true;
  hidecaseform = true;
  hidecases = true;
  hidemissing = true;
  hideform2 = true;
  hidemissingaddform = true;
  hidewantedaddform=true;

  feedbackform = new FormGroup({
    username1: new FormControl('username1'),
    matter: new FormControl(''),
    receivedby: new FormControl(''),
    rating: new FormControl('currentRate')
  })

  casesform = new FormGroup({
    status: new FormControl('')
  })

  addmissingform=new FormGroup({
    name:new FormControl(''),
    contactno:new FormControl('')
  })

  addwantedform=new FormGroup({
    name:new FormControl('')
  })

  home() {
    this.hideimage = false;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = true;
    this.hideform2 = true;
    this.hidemissingaddform=true;
    this.hidewantedaddform=true;
  }

  // policemembers
  feedbackdata1: any[] = [];
  openpolicemembers() {
    this.hidecases = false;
    this.hideimage = true;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidemissing = true;
    this.hideform2 = true;
    this.hidemissingaddform=true;
    this.hidewantedaddform=true;
    this.dialogservice.getpolice().subscribe(data => {
      console.log(data);
      this.feedbackdata1 = data
    })
  }

  // casesdata
  casesdata: any[] = [];
  openassignedcomplaints(casesdata1) {
    this.hidefeedbackform = true;
    this.hideimage = true;
    this.hidecaseform = false;
    this.hidecases = true;
    this.hidemissing = true;
    this.hideform2 = true;
    this.hidemissingaddform=true;
    this.hidewantedaddform=true;
    this.dialogservice.getpoliceassignedcases(this.username1).subscribe(data => {
      console.log(data);
      this.casesdata = data;
      console.log(this.casesdata);
      if (data.length === 0) {
        this.modelservice.open(casesdata1);
      }
      else {
        for (let i = 0; i < data.length; i++) {
          this.casesdata[i].image = ('data:image/jpeg;base64,' + this.casesdata[i].image);
        }
      }
    })
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }

  updatestatus(data, statusupdate) {
    this.dialogservice.updatestatus1(data.id, this.casesform.value.status).subscribe(data => {
      console.log(data);
      if (data === null) {
        this.modelservice.open(statusupdate, { size: 'lg' });
      }
    })
  }


  // manage wanted
  urlimage1: any[] = [];
  wanted() {
    let i: number;
    this.hideimage = true;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = false;
    this.hideform2 = true;
    this.hidewantedaddform=true;
    this.hidemissingaddform=true;
    this.dialogservice.getimages().subscribe(data => {
      console.log(data);
      this.urlimage1 = data;
      console.log(this.urlimage1);
      for (i = 0; i < data.length; i++) {
        this.urlimage1[i].image = 'data:image/jpeg;base64,' + this.urlimage1[i].image;
      }
    })
  }

  addwanted(){
    this.hideimage = true;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = false;
    this.hideform2 = true;
    this.hidewantedaddform=false;
    this.hidemissingaddform=true;
  }

  addwanteddata(policeassign) {
    const data = this.addwantedform.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileimage);
    console.log(data);
    console.log(this.fileimage);
    this.dialogservice.postwantedimage(formdata).subscribe(data => {
        console.log(data);
        this.wanted();
        this.modelservice.open(policeassign,{size:'lg'});
    })
}
openwant(){
  this.hidewantedaddform=true;
}

// missing
  urlimage2: any[] = [];
  missing() {
    let i: number;
    this.hideimage = true;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = true;
    this.hideform2 = false;
    this.hidemissingaddform=true;
 
    this.dialogservice.getmissingimages().subscribe(data => {
      console.log(data);
      this.urlimage2 = data;
      console.log(this.urlimage2);
      for (i = 0; i < data.length; i++) {
        this.urlimage2[i].image = 'data:image/jpeg;base64,' + this.urlimage2[i].image;
      }
    })
  }
fileimage:File;
  image(value) {
    const file = value.target.files[0];
    this.fileimage = file;
}

addmissing(){
  this.hideimage = true;
    this.hidefeedbackform = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = true;
    this.hideform2 = false;
    this.hidemissingaddform=false;
    this.hidewantedaddform=true;
}

  addmissingdata(policeassign) {
    const data = this.addmissingform.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileimage);
    this.dialogservice.postmissingimage(formdata).subscribe(data => {
        console.log(data);
        this.missing();
        this.modelservice.open(policeassign,{size:'lg'});
    })
}

openmiss(){
  
  this.hidemissingaddform=true;
}

// feedback
  openfeedbackform() {
    this.hidefeedbackform = false;
    this.hideimage = true;
    this.hidecaseform = true;
    this.hidecases = true;
    this.hidemissing = true;
    this.hidewantedaddform=true;
    this.hidemissingaddform=true;
    this.hideform2 = true;
  }
  submitfeedback(feedbackdata) {
    console.log(this.feedbackform.value.rating);
    this.dialogservice.feedbacksubmit(this.feedbackform.value).subscribe(data => {
      console.log(data);
      this.modelservice.open(feedbackdata);
    })
  }

// logout
  logout() {
    sessionStorage.clear();
    this.modelservice.dismissAll();
    this.router.navigate(['']);
  }
  logout1(logoutcontent) {
    this.modelservice.open(logoutcontent);
  }

}
