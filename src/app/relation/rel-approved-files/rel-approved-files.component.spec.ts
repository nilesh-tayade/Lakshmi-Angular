import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelApprovedFilesComponent } from './rel-approved-files.component';

describe('RelApprovedFilesComponent', () => {
  let component: RelApprovedFilesComponent;
  let fixture: ComponentFixture<RelApprovedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelApprovedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelApprovedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
