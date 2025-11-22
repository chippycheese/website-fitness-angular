import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMuscleGroupCardComponent } from './dashboard-muscle-group-card.component';

describe('DashboardMuscleGroupCardComponent', () => {
  let component: DashboardMuscleGroupCardComponent;
  let fixture: ComponentFixture<DashboardMuscleGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMuscleGroupCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMuscleGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
