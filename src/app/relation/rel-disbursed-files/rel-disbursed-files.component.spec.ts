import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelDisbursedFilesComponent } from './rel-disbursed-files.component';

describe('RelDisbursedFilesComponent', () => {
  let component: RelDisbursedFilesComponent;
  let fixture: ComponentFixture<RelDisbursedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelDisbursedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelDisbursedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
