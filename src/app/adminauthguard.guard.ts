import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CrimeserviceService } from './crime/crimeservice.service';


@Injectable({
  providedIn: 'root'
})
export class AdminauthguardGuard implements CanActivate {

  constructor(private router:Router
  ){}
  isadmin:String;
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    this.isadmin=sessionStorage.getItem("role");
    console.log(this.isadmin);
        if (this.isadmin==="Admin") {
            return true;
        }
        else{
          this.router.navigate(['']);
          return false;
        }
  }
  
}
