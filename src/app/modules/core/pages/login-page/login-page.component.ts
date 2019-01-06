import { Component, OnInit,OnDestroy } from '@angular/core';
// import { MinApiService, Login, CurrentUserInformation,CurrentParticipantRead } from '../../../shared/services/min-api/min-api.service';

import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
 import { AuthService } from '../../authentication/auth/auth.service';




@Component({
  selector: 'tset-angular-material-sw-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit,OnDestroy{
   loginSub:Subscription;
  constructor(
    // private _auth:AuthService,
    // private _apiLogin: MinApiService,
    // private _Rout:Router
  ) { }

  ngOnInit() {



  }


 login( loginFormData: LoginForm )  {

// login( loginFormData: LoginForm )

// let bady = new FormData()

// bady.append('uname',loginFormData.username)

// bady.append('pword',loginFormData.password)

//  this.loginSub =  this._apiLogin.Login_public(bady).subscribe((res:Login)=>{







// if(res.CurrentUserType === "ParticipantUser"){


//   this._apiLogin.CurrentParticipantRead_Participant().subscribe( (user) =>{


//     this.setuserdata(res,user.Participant)

//   });


//   this._auth.userLoginStats.next(true)


// this._Rout.navigate(['app','Participants','home'])



// }else if(res.CurrentUserType === "AdminUser"){

//   this._apiLogin.CurrentParticipantRead_Admin().subscribe( (user) =>{


//     this.setuserdata(res,user.Admin)

//   });

//   this._auth.userLoginStats.next(true)
//   this._Rout.navigate(['app','AdminDashboard','home'])

// }




// });

}



 setuserdata(){
  //setuserdata(res,userAllData)

              // localStorage.setItem( 'userinfo' , JSON.stringify(res) )
              // localStorage.setItem( 'userallinfo' , JSON.stringify(userAllData) )
              // this._auth.CurrentUserInformation.next(res);
              // this._auth.CurrentUserAllInformation.next(userAllData);



}





ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  //console.log('OnDestroy : login');


  if(this.loginSub)
  this.loginSub.unsubscribe();

}



}







interface LoginForm {
  username: string;
  password: string;
}

