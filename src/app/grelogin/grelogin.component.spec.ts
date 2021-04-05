import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreloginComponent } from './grelogin.component';

describe('GreloginComponent', () => {
  let component: GreloginComponent;
  let fixture: ComponentFixture<GreloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
