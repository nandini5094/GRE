import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreregisterComponent } from './greregister.component';

describe('GreregisterComponent', () => {
  let component: GreregisterComponent;
  let fixture: ComponentFixture<GreregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
