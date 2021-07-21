import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElectronicItemComponent } from './add-electronic-item.component';

describe('AddElectronicItemComponent', () => {
  let component: AddElectronicItemComponent;
  let fixture: ComponentFixture<AddElectronicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElectronicItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElectronicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
