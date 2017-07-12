import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAtComponent } from './created-at.component';

describe('CreatedAtComponent', () => {
  let component: CreatedAtComponent;
  let fixture: ComponentFixture<CreatedAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
