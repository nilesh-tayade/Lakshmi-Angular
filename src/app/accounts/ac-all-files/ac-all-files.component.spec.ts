import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcAllFilesComponent } from './ac-all-files.component';

describe('AcAllFilesComponent', () => {
  let component: AcAllFilesComponent;
  let fixture: ComponentFixture<AcAllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcAllFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
