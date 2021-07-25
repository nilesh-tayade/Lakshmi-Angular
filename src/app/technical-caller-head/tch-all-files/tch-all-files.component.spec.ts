import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchAllFilesComponent } from './tch-all-files.component';

describe('TchAllFilesComponent', () => {
  let component: TchAllFilesComponent;
  let fixture: ComponentFixture<TchAllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchAllFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TchAllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
