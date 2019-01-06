import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tset-angular-material-sw-nav-mnue',
  templateUrl: './nav-mnue.component.html',
  styleUrls: ['./nav-mnue.component.scss']
})
export class NavMnueComponent implements OnInit {

  @Output() SidenavOpen: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  menuNav() {
    this.SidenavOpen.emit();
  }

}
