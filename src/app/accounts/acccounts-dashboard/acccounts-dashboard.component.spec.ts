import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccountsDashboardComponent } from './acccounts-dashboard.component';

describe('AcccountsDashboardComponent', () => {
  let component: AcccountsDashboardComponent;
  let fixture: ComponentFixture<AcccountsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcccountsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcccountsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
