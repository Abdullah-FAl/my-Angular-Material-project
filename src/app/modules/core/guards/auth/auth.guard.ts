import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth/auth.service';
import { CurrentUserInformation } from '../../../shared/services/min-api/min-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private AuthS: AuthService
  ) {}
 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


           // const isuser =  this.AuthS.userLoginStats
           const userinfo: CurrentUserInformation = (JSON.parse(localStorage.getItem('userinfo')) || {} ) ;


//            userinfo.pipe(

//   tap( user =>{

//     if(!user){


//     this.AuthS.logout();
//     }
// }))



  return userinfo.CurrentUserPrivileges;
  }







}
