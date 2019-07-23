import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'tset-angular-material-sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  @Input() Sidenav: MatSidenav;
  setting: Observable<string>;
    constructor() { }

    ngOnInit() {
   this.setting =  from(this.getsetting() );
    }

async getsetting(): Promise<string> {

  return await 'my-Angular-Material-project';
}

}
