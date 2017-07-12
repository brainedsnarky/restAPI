import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportersCountComponent } from './supporters-count.component';

describe('SupportersCountComponent', () => {
  let component: SupportersCountComponent;
  let fixture: ComponentFixture<SupportersCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportersCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
