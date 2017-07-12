import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountRaisedComponent } from './amount-raised.component';

describe('AmountRaisedComponent', () => {
  let component: AmountRaisedComponent;
  let fixture: ComponentFixture<AmountRaisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountRaisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountRaisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
