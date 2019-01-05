import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MaterialComponentsModule } from '../shared/Modules/material-components/material-components.module';
import { RoutingComponent } from './view/routing/routing.component';
import { HeaderComponent } from './components/app-shell/header/header.component';
import { FooterComponent } from './components/app-shell/footer/footer.component';
import { NavMnueComponent } from './components/app-shell/nav-mnue/nav-mnue.component';
import { MinApiService } from '../shared/services/min-api/min-api.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HomeRoutingModule,

    MaterialComponentsModule
  ],
  providers:[MinApiService],

  declarations: [WelcomeComponent, RoutingComponent, HeaderComponent, FooterComponent, NavMnueComponent]
})
export class HomeModule { }
