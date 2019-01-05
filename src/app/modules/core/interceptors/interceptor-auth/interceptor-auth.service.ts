import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { AuthService } from '../../authentication/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor {


  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modified = req.clone({setHeaders: {'Custom-Header-1': '1'}});

    const authenticationS = '' ;





    return next.handle(modified).pipe(

    tap((event: HttpEvent<any>) => {

      if (event instanceof HttpResponse) {



if ( event.body.error ===  'Unauthorized user! Allowed users:AdminUser,ParticipantUser.'
  || event.body.error === 'Unauthorized user! Allowed users:AdminUser.'
 ) {


 // authenticationS.logout();


}
      }


    }));




  }

}
