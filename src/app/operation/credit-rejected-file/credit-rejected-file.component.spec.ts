import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditRejectedFileComponent } from './credit-rejected-file.component';

describe('CreditRejectedFileComponent', () => {
  let component: CreditRejectedFileComponent;
  let fixture: ComponentFixture<CreditRejectedFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditRejectedFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditRejectedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
