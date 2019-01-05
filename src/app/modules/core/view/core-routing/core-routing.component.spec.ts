import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreRoutingComponent } from './core-routing.component';

describe('CoreRoutingComponent', () => {
  let component: CoreRoutingComponent;
  let fixture: ComponentFixture<CoreRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
