import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
// import { MinApiService, CurrentUserInformation } from '../../../shared/services/min-api/min-api.service';


@Injectable()
export class AuthService {

  // public userLoginStats:BehaviorSubject<boolean> = new BehaviorSubject(null);
  //  public CurrentUserInformation:BehaviorSubject<CurrentUserInformation> = new BehaviorSubject(JSON.parse(localStorage.getItem('userinfo')) || null );
  // public CurrentUserAllInformation:BehaviorSubject<CurrentUserInformation> = new BehaviorSubject(JSON.parse(localStorage.getItem('userallinfo')) || null );

  constructor(
    // private api:MinApiService,
    // private Cookie:CookieService,
    // private rout: Router
  ) {


  }




//  userStats(){

//   this.userLoginStats.subscribe((userislogin) =>{


//     if(userislogin === false  ){
//       this.logout()

//     }




//   })
// }





//   async logout(){

//     const data =  await this.api.Logout_public().toPromise()

//      if(data.error === "" && data.CurrentUserType === "Anonymous"){
//                             await localStorage.removeItem('userinfo');
//                             await this.Cookie.delete('PHPSESSID','/');
//                             await this.rout.navigate(['app','login']);
//      }

//  }





}
