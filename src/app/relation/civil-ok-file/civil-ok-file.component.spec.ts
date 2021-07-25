import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilOkFileComponent } from './civil-ok-file.component';

describe('CivilOkFileComponent', () => {
  let component: CivilOkFileComponent;
  let fixture: ComponentFixture<CivilOkFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilOkFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilOkFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
