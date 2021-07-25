import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmApprovedFileComponent } from './cm-approved-file.component';

describe('CmApprovedFileComponent', () => {
  let component: CmApprovedFileComponent;
  let fixture: ComponentFixture<CmApprovedFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmApprovedFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmApprovedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
