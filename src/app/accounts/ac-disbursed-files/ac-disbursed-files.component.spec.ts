import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcDisbursedFilesComponent } from './ac-disbursed-files.component';

describe('AcDisbursedFilesComponent', () => {
  let component: AcDisbursedFilesComponent;
  let fixture: ComponentFixture<AcDisbursedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcDisbursedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcDisbursedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
