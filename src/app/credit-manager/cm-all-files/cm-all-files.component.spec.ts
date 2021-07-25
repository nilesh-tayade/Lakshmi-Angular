import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAllFilesComponent } from './cm-all-files.component';

describe('CmAllFilesComponent', () => {
  let component: CmAllFilesComponent;
  let fixture: ComponentFixture<CmAllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmAllFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
