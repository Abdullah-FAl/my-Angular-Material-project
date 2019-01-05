import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMnueComponent } from './nav-mnue.component';

describe('NavMnueComponent', () => {
  let component: NavMnueComponent;
  let fixture: ComponentFixture<NavMnueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMnueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMnueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
