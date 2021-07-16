import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationDashboardComponent } from './relation-dashboard.component';

describe('RelationDashboardComponent', () => {
  let component: RelationDashboardComponent;
  let fixture: ComponentFixture<RelationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
