import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchDashboardComponent } from './tch-dashboard.component';

describe('TchDashboardComponent', () => {
  let component: TchDashboardComponent;
  let fixture: ComponentFixture<TchDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TchDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TchDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
