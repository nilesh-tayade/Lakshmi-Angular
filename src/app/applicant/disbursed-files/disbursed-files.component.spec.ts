import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursedFilesComponent } from './disbursed-files.component';

describe('DisbursedFilesComponent', () => {
  let component: DisbursedFilesComponent;
  let fixture: ComponentFixture<DisbursedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisbursedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
