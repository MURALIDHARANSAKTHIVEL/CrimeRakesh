import { Component, OnInit, ViewChild, ViewChildren, Query, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DomSanitizer } from '@angular/platform-browser';

import { Registerlogin } from './registerlogin';
import { CrimeserviceService } from '../crimeservice.service';


@Component({
    selector: 'app-registerlogin',
    templateUrl: './registerlogin.component.html',
    styleUrls: ['./registerlogin.component.css']
})
export class RegisterloginComponent implements OnInit {

    ngOnInit() {
        this.username1 = sessionStorage.getItem("username");
        console.log(this.username1);
    }
    username1: any;
    data: boolean;
    constructor(private dialogservice: CrimeserviceService, private router: Router, private modelservice: NgbModal, private s1: DomSanitizer) { }
    urlimage1: any[] = [];
    hidewanted = true;
    hidefeedback = true;
    hidemissing = true;
    hidecases = true;
    hidedeleteform = true;
    hideaddform = true;
    hidebuttons = true;
    hideform = true;
    fileimage: any = File;
    disable1 = true;
    urlimage: any;
    hideform3 = true;
    imagedata: Registerlogin[] = [];
    casesdata: Registerlogin[] = [];
    hideimage = false;
    hidemissingaddform = true;
    hidewantedaddform = true;

    complaintform = new FormGroup({
        username: new FormControl('username1'),
        culpritname: new FormControl(''),
        casename: new FormControl(''),
        date: new FormControl(''),
        location: new FormControl(''),
        remarks: new FormControl('')
    })

    policeform = new FormGroup({
        name: new FormControl(''),
        policeid: new FormControl('', Validators.required),
        username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^[a-zA-Z]+$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
        phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        pincode: new FormControl(''),
    })

    deleteform = new FormGroup({
        policeid: new FormControl(''),
    })

    casesform = new FormGroup({
        assignedto: new FormControl('')
    })

    addmissingform = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        contactno: new FormControl('')
    })

    addwantedform = new FormGroup({
        // id: new FormControl(''),
        name: new FormControl(''),
    })

    opencomplaintform() {
        this.hideimage = true;
        this.hideform = false;
        this.hidebuttons = true;
        this.hideform3 = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
    }

    addpolice() {
        this.hideimage = true;
        this.hidebuttons = false;
        this.hideform = true;
        this.hideaddform = false;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
    }

    deletepolice() {
        this.hideimage = true;
        this.hidebuttons = false;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = false;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
    }
    home() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hideimage = false;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
    }
    image(value) {
        const file = value.target.files[0];
        this.fileimage = file;
    }

    imagesave(complaintcontent) {
        const data = this.complaintform.value;
        const formdata = new FormData();
        formdata.append("data", JSON.stringify(data));
        formdata.append('image', this.fileimage);
        this.dialogservice.postimage(formdata).subscribe(data => {
            this.disable1 = !this.disable1;
            console.log(data);
            // if (data !== null) {
            //     this.modelservice.open(complaintcontent);
            // }
        })
    }

    getData() {
        this.hideform3 = false;
        console.log(this.complaintform.value.username);
        this.dialogservice.getimage(this.complaintform.value.username).subscribe(data1 => {
            this.imagedata = data1;
            console.log(this.imagedata);
            for (let i = 0; i < data1.length; i++) {
                this.imagedata[i].image = 'data:image/jpeg;base64,' + this.imagedata[i].image;
            }
        });
    }

    fetchimage(url: string) {
        return this.s1.bypassSecurityTrustUrl(url);
    }


    openmanagepolice() {
        this.hideform = true;
        this.hidebuttons = false;
        this.hidecases = true;
        this.hideimage = true;
        this.hideform3 = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
    }


    addpolicesubmit(content) {
        this.dialogservice.addpolice(this.policeform.value).subscribe(data => {
            console.log(data);
            this.policeform.reset();
            this.modelservice.open(content);
        })
    }

    logout1() {
        sessionStorage.clear();
        this.modelservice.dismissAll();
        this.router.navigate(['']);
    }

    deletepolicesubmit(content1) {
        console.log(this.deleteform.value);
        this.dialogservice.deletepolice(this.deleteform.value).subscribe(data1 => {
            console.log(data1);
            this.deleteform.reset();
            if (data1 === null) {
                alert("Invalid Police Id");
            }
            else {
                this.modelservice.open(content1, { size: 'lg' });
            }
        })
    }
    ;
    managecases() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = false;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hideimage = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
        let urlimage2: any[] = [];
        this.dialogservice.managecases().subscribe(data => {
            console.log(data);

            this.casesdata = data;
            for (let i = 0; i < data.length; i++) {
                this.casesdata[i].image = ('data:image/jpeg;base64,' + this.casesdata[i].image);
                console.log(this.casesdata[i].status);
                if (this.casesdata[i].status != null && this.casesdata[i].assignedto != null) {
                    this.casesdata[i].hideupdatebutton = true;
                    this.casesdata[i].hideremovebutton = false;
                    console.log(this.casesdata);
                }
                else if (this.casesdata[i].status != null && this.casesdata[i].assignedto != null) {
                    this.casesdata[i].hideupdatebutton = false;
                    this.casesdata[i].hideremovebutton = true;
                }
                else if (this.casesdata[i].status === null && this.casesdata[i].assignedto != null) {
                    this.casesdata[i].hideupdatebutton = true;
                    this.casesdata[i].hideremovebutton = true;
                }
                else {
                    this.casesdata[i].hideupdatebutton = false;
                    this.casesdata[i].hideremovebutton = true;
                }
            }
        })
    }

    logout(logoutcontent) {
        this.modelservice.open(logoutcontent);
    }


    policeassigned(data,policeassign) {
        console.log(data.id);
        this.dialogservice.policeassigned(data.id, this.casesform.value.assignedto).subscribe(data => {
            console.log(data);
            // alert("Police are Assigned to this case");
            if(data===null){
                alert("please check the police number and Enter again");
            }
            else{
                this.modelservice.open(policeassign,{size:'lg'});
            }
        })
    }

    managemissing1: any[] = [];
    managemissing() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = false;
        this.hidewanted = true;
        this.hideimage = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
        this.dialogservice.managemissing().subscribe(data => {
            console.log(data);
            this.managemissing1 = data;
            for (let i = 0; i < data.length; i++) {
                this.managemissing1[i].image = ('data:image/jpeg;base64,' + this.managemissing1[i].image);
            }
        })
    }

    addmissing() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = false;
        this.hidewanted = true;
        this.hideimage = true;
        this.hidefeedback = true;
        this.hidemissingaddform = false;
        this.hidewantedaddform = true;
    }

    addmissingdata(policeassign) {
        const data = this.addmissingform.value;
        const formdata = new FormData();
        formdata.append("data", JSON.stringify(data));
        formdata.append('image', this.fileimage);
        this.dialogservice.postmissingimage(formdata).subscribe(data => {
            console.log(data);
            this.managemissing();
            this.modelservice.open(policeassign,{size:'lg'});
        })
    }

    managewanted1: any[] = [];
    managewanted() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = false;
        this.hideimage = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
        this.dialogservice.managewanted().subscribe(data => {
            console.log(data);
            this.managewanted1 = data;
            console.log(data.length);
            for (let i = 0; i < data.length; i++) {
                this.managewanted1[i].image = ('data:image/jpeg;base64,' + this.managewanted1[i].image);
            }
        })
    }

    addwanted() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = false;
        this.hideimage = true;
        this.hidefeedback = true;
        this.hidemissingaddform = true;
        this.hidewantedaddform = false;
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
            this.managewanted();
            this.modelservice.open(policeassign,{size:'lg'});
        })
    }

    openwant(){
        this.managewanted();
    }
    openmiss(){
        this.managemissing();
    }

    feedbackdata: any[] = [];
    openfeedbacks() {
        this.hidebuttons = true;
        this.hideform = true;
        this.hideaddform = true;
        this.hidedeleteform = true;
        this.hideform3 = true;
        this.hidecases = true;
        this.hidemissing = true;
        this.hidewanted = true;
        this.hideimage = true;
        this.hidefeedback = false;
        this.hidemissingaddform = true;
        this.hidewantedaddform = true;
        this.dialogservice.getfeedback().subscribe(data => {
            this.feedbackdata = data;

        })
    }

    removemissing(data) {
        this.dialogservice.remove(data.name).subscribe(data => {
            console.log(data);
            this.managemissing();
        })
    }

    removewanted(data) {
        this.dialogservice.removewant(data.name).subscribe(data => {
            console.log(data);
            this.managewanted();
        })
    }

    removecase(data) {
        console.log(data);
        this.dialogservice.removecase(data.id).subscribe(data => {
            console.log(data);
        })
    }
}