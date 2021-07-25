import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmRejectedFileComponent } from './cm-rejected-file.component';

describe('CmRejectedFileComponent', () => {
  let component: CmRejectedFileComponent;
  let fixture: ComponentFixture<CmRejectedFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmRejectedFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmRejectedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
