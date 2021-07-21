import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewElectronicItemComponent } from './view-electronic-item.component';

describe('ViewElectronicItemComponent', () => {
  let component: ViewElectronicItemComponent;
  let fixture: ComponentFixture<ViewElectronicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewElectronicItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewElectronicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
