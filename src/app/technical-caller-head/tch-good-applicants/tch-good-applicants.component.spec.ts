import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchGoodApplicantsComponent } from './tch-good-applicants.component';

describe('TchGoodApplicantsComponent', () => {
  let component: TchGoodApplicantsComponent;
  let fixture: ComponentFixture<TchGoodApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchGoodApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TchGoodApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
