import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tset-angular-material-sw-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  sidenav0: boolean = false;
  panelOpenState: boolean = true;
  loading: boolean = true;
  apptheme: string = 'app-theme1';
  constructor() { }

  ngOnInit() {
  }


  openSidPanel() {
    this.sidenav0 = (this.sidenav0) ?  true : false;
  }
}
