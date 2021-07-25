import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsFilesComponent } from './ops-files.component';

describe('OpsFilesComponent', () => {
  let component: OpsFilesComponent;
  let fixture: ComponentFixture<OpsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
