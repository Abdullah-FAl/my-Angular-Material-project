import { Component,OnInit } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'tset-angular-material-sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'aistibyan-web';

  apptheme: string = 'app-theme1';

  loading: boolean = true;

  constructor(
    private rout: Router
  ) {

   this.rout.events.subscribe( ( routerEvent: Event ) => {
      this.checkRouterEvent(routerEvent);
    });


  }





ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}













checkRouterEvent(routerevent: Event): void {


    if (routerevent instanceof NavigationStart ) {
    this.loading = true;
    }

    if (
      routerevent instanceof NavigationEnd ||
      routerevent instanceof NavigationCancel ||
      routerevent instanceof NavigationError
      ) {
    this.loading = false;

      }

    }







}
