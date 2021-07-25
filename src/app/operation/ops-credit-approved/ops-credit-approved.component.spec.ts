import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsCreditApprovedComponent } from './ops-credit-approved.component';

describe('OpsCreditApprovedComponent', () => {
  let component: OpsCreditApprovedComponent;
  let fixture: ComponentFixture<OpsCreditApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsCreditApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsCreditApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
