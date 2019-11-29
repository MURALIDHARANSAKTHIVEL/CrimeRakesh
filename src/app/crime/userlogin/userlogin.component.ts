import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { CrimeserviceService } from '../crimeservice.service';
import { Userlogin } from './userlogin';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  constructor(private router: Router, private modelservice: NgbModal, private s1: DomSanitizer, private dialogservice: CrimeserviceService) { }

  ngOnInit() {
    this.username1 = sessionStorage.getItem("username");
    console.log(this.username1);
    this.role = sessionStorage.getItem("value");
    this.role = "Message is From" + this.role;
  }

  currentRate = 0;
  urlimage: any;
  username1: any
  role: any;
  urlimage1: any[] = [];

  person: Object;
  fileImage: any = File;
  hideform = true;
  hideform1 = true;
  hideform2 = true;
  disable1 = true;
  imagedata: Userlogin[]=[];
  person2 = false;
  hideform3 = true;

  disable3 = false;
  hideImage = false;
  hideFeedbackForm = true;
  message = true;
  hideMissing = true;
  hideFirForm = true;

  complaintform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    culpritname: new FormControl(''),
    casename: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    // status: new FormControl(''),
    remarks: new FormControl('')
  })

  feedbackform = new FormGroup({
    username1: new FormControl('username1'),
    matter: new FormControl(''),
    receivedby: new FormControl(''),
    rating: new FormControl('currentRate')
  })

  home() {
    this.hideImage = false;
    this.hideform = true;
    this.hideform1 = true;
    this.hideform2 = true;
    this.hideform3 = true;
    this.hideMissing = true;
    this.hideFeedbackForm = true;
    this.hideFirForm = true;

  }
  openform() {
    this.hideImage = true;
    this.hideform = false;
    this.hideform1 = true;
    this.hideform2 = true;
    this.hideform3 = true;
    this.hideFeedbackForm = true;
    this.hideMissing = true;
    this.hideFirForm = true;
  }

  openform1() {
    this.hideImage = true;
    this.hideform = true;
    this.hideform1 = false;
    this.hideform2 = true;
    this.hideform3 = true;
    this.hideFeedbackForm = true;
    this.hideMissing = true;
    this.hideFirForm = true;
  }

  logout(logoutcontent) {
    this.modelservice.open(logoutcontent);
  }

  editinformation(){
    console.log(this.username1);
    this.dialogservice.editInformation(this.username1).subscribe(data=>{
      console.log(data);
    })
  }

  gotohome() {
    this.modelservice.dismissAll();
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  image(value) {
    const file = value.target.files[0];
    this.fileImage = file;
  }

  imagesave(complaintcontent) {
    const data = this.complaintform.value;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(data));
    formdata.append('image', this.fileImage);
    this.dialogservice.postimage(formdata).subscribe(data => {
      this.disable1 = !this.disable1;
      // this.hideform3=true; 
      console.log("edfe" + data);
      if (data !== null) {
        this.modelservice.open(complaintcontent);
      }
      console.log(data)
    })
  }

  getData() {
    this.hideform3 = false;
    let i:number;
    console.log(this.complaintform.value.username);
    this.dialogservice.getimage(this.complaintform.value.username).subscribe(data1 => {
      this.imagedata = data1;
      console.log(this.imagedata);
      for (i = 0; i < data1.length; i++) {
      this.imagedata[i].image = 'data:image/jpeg;base64,' + this.imagedata[i].image;}
    });
  }

  fetchimage(url: string) {
    return this.s1.bypassSecurityTrustUrl(url);
  }

  wanted() {
    let i: number;
    this.hideform1 = true;
    this.hideform = true;
    this.hideform2 = true;
    this.hideImage = true;
    this.hideFeedbackForm = true;
    this.hideMissing = false;
    this.hideFirForm = true;
    this.dialogservice.getimages().subscribe(data => {
      console.log(data);
      this.urlimage1 = data;
      console.log(this.urlimage1);
      for (i = 0; i < data.length; i++) {
        this.urlimage1[i].image = 'data:image/jpeg;base64,' + this.urlimage1[i].image;
      }
    })
  }
  showFiller = false;
  urlimage2: any[] = [];
  missing() {
    let i: number;
    this.hideform1 = true;
    this.hideform = true;
    this.hideform2 = false;
    this.hideImage = true;
    this.hideFeedbackForm = true;
    this.hideMissing = true;
    this.hideFirForm = true;
    this.dialogservice.getmissingimages().subscribe(data => {
      console.log(data);
      this.urlimage2 = data;
      console.log(this.urlimage2);
      for (i = 0; i < data.length; i++) {
        this.urlimage2[i].image = 'data:image/jpeg;base64,' + this.urlimage2[i].image;
      }
    })
  }



  openfeedbackform() {
    this.hideform1 = true;
    this.hideform = true;
    this.hideform2 = true;
    this.hideImage = true;
    this.hideFeedbackForm = false;
    this.hideMissing = true;
    this.hideFirForm = true;
  }
  submitfeedback() {
    console.log(this.feedbackform.value.rating);
    this.dialogservice.feedbacksubmit(this.feedbackform.value).subscribe(data => {
      console.log(data);
    })
  }

  firdata: any[] = [];
  openfirform() {
    let i: number;
    this.hideImage = true;
    this.hideform = true;
    this.hideform1 = true;
    this.hideform2 = true;
    this.hideform3 = true;
    this.hideFeedbackForm = true;
    this.hideMissing = true;
    this.hideFirForm = false;
    console.log(this.username1);
    this.dialogservice.openfir(this.username1).subscribe(x => {
      console.log(x);
      this.firdata = x;
      console.log(this.firdata);
      for (i = 0; i < x.length; i++) {
        this.firdata[i].image = 'data:image/jpeg;base64,' + this.firdata[i].image;
      }
    })
  }

}

