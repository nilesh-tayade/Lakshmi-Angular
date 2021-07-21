import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanTypeComponent } from './view-loan-type.component';

describe('ViewLoanTypeComponent', () => {
  let component: ViewLoanTypeComponent;
  let fixture: ComponentFixture<ViewLoanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
