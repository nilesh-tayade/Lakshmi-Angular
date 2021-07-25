import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchBadApplicantsComponent } from './tch-bad-applicants.component';

describe('TchBadApplicantsComponent', () => {
  let component: TchBadApplicantsComponent;
  let fixture: ComponentFixture<TchBadApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchBadApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TchBadApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
