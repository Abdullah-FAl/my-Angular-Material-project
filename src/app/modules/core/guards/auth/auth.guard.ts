import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth/auth.service';

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


           const userinfo = (JSON.parse(localStorage.getItem('userinfo')) || {CurrentUserPrivileges: false} ) ;


  return userinfo.CurrentUserPrivileges;
  }







}
