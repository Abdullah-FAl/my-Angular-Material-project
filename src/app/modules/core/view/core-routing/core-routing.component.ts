import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth/auth.service';



@Component({
  selector: 'aloqbi-adil-sw-core-routing',
  templateUrl: './core-routing.component.html',
  styleUrls: ['./core-routing.component.scss']
})
export class CoreRoutingComponent implements OnInit {

  constructor(
   // private auth:AuthService,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //this.auth.userStats()
  }

}
