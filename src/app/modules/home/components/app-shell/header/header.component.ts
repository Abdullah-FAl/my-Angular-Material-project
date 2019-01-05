import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { MinApiService, SettingViewQuery } from '../../../../shared/services/min-api/min-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'aloqbi-adil-sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  @Input() Sidenav: MatSidenav;
  setting:Observable<SettingViewQuery>;
    constructor(
     private _api:MinApiService,

    ) { }

    ngOnInit() {
   this.setting = this._api.SettingView_Public().pipe(
                             map(Sett=>{
                              return   Sett.SettingViewQuery;
                             })
   );
    }

}
