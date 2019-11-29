import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrimeserviceService {
 

   userbaseUrl = 'http://localhost:8080/api/user';
   adminbaseUrl='http://localhost:8080/api/admin';
   policebaseUrl='http://localhost:8080/api/police';

 
 private _person: any;
  public get person(): any {
    return this._person;
  }
  public set person(value: any) {
    this._person = value;
  }

  constructor(private http: HttpClient) { }

  adminloginmethod(loginform:any): Observable<any> {
    return this.http.post(`${this.adminbaseUrl}`+ `/adminlogin`, loginform); 
  }

  visitorloginmethod(loginform:any): Observable<any> {
    return this.http.post(`${this.userbaseUrl}`+ `/visitorlogin`, loginform); 
  }

  policeloginmethod(loginform:any): Observable<any> {
    return this.http.post(`${this.policebaseUrl}`+ `/policelogin`, loginform); 
  }

  editInformation(username1:any):Observable<any>{
    return this.http.post(`${this.userbaseUrl}`+`/edit-information`,username1);
  }

  userregistermethod(registerform:object):Observable<Object>{
    return this.http.post(`${this.userbaseUrl}`+ `/userregister`,registerform);
  }

  adminregistermethod(registerform:object):Observable<Object>{
    return this.http.post(`${this.adminbaseUrl}`+ `/adminregister`,registerform);
  }

  postimage(data:any):Observable<any>{
  return this.http.post(this.userbaseUrl+'/complaintimage',data);
}

getimage(data:any):Observable<any>
{
  return this.http.get(`${this.userbaseUrl}/showimage/${data}`);
}

getimages():Observable<any>{
  return this.http.get(`${this.userbaseUrl}`+`/showimages`);
}

addpolice(policeform:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/policejoining`,policeform);
}

deletepolice(deleteform: any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/removepolice`,deleteform);
}

managecases():Observable<any>{
  return this.http.get(`${this.adminbaseUrl}`+ `/managecases`);
}

policeassigned(id:any,assignedto:any):Observable<any>{
  let params = new HttpParams().set('id', id).set('assignedto', assignedto)
  return this.http.post(`${this.adminbaseUrl}`+ `/policeassigned`,params);
}

managemissing():Observable<any>{
  return this.http.get(`${this.adminbaseUrl}`+`/managemissing`);
}

getpoliceassignedcases(data:any):Observable<any>{
  return this.http.post(`${this.policebaseUrl}`+`/policeassignedcases`,data)
}

managewanted():Observable<any>{
  return this.http.get(`${this.adminbaseUrl}`+`/managewanted`);
}

feedbacksubmit(feedbackform:any):Observable<any>{
  return this.http.post(`${this.userbaseUrl}`+`/feedback`,feedbackform);
}

getfeedback():Observable<any>{
  return this.http.get(`${this.adminbaseUrl}`+`/feedbackwanted`);
}

remove(data:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/removemissing`,data);
}

removewant(data:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/removewanted`,data);
}

updatestatus1(id:any,status:any):Observable<any>{
  // let params = new HttpParams().set('id', id).set('status', status)
  return this.http.put(`${this.policebaseUrl}`+ `/statusupdation/${id}`,status);
}

getpolice():Observable<any>{
  return this.http.get(`${this.policebaseUrl}`+`/policemembers`);
}

getmissingimages():Observable<any>{
  return this.http.get(`${this.userbaseUrl}/missingimages`);
}

updatevisitorpassword(usernameform:any):Observable<any>{
  return this.http.post(`${this.userbaseUrl}`+`/visitorpasswordupdation`,usernameform);
}
updateadminpassword(usernameform:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/adminpasswordupdation`,usernameform);
}
updatepolicepassword(usernameform:any):Observable<any>{
  return this.http.post(`${this.policebaseUrl}`+`/policepasswordupdation`,usernameform);
}

removecase(dataid:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/removecases`,dataid);
}

openfir(data:any):Observable<any>{
  return this.http.post(`${this.userbaseUrl}`+`/openfiruserdata`,data);
}

postmissingimage(formdata:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/missingimagestoring`,formdata);
}

postwantedimage(formdata:any):Observable<any>{
  return this.http.post(`${this.adminbaseUrl}`+`/wantedimagestoring`,formdata);
}

}
