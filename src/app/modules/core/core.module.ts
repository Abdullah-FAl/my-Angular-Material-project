import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialComponentsModule } from '../shared/Modules/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CoreRoutingModule } from './core-routing.module';


import { LoginFormComponent } from './components/Clogin/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreRoutingComponent } from './view/core-routing/core-routing.component';

// import { CookieService } from 'ngx-cookie-service';


import { AuthService } from './authentication/auth/auth.service';
import { InterceptorAuthService } from './interceptors/interceptor-auth/interceptor-auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  providers: [


    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuthService,
      multi: true
    },

   // MinApiService,
    AuthService,
  //  CookieService,


  ],
  declarations: [LoginFormComponent, LoginPageComponent, CoreRoutingComponent]
})
export class CoreModule { }
