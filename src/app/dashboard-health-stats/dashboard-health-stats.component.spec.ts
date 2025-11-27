import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHealthStatsComponent } from './dashboard-health-stats.component';

describe('DashboardHealthStatsComponent', () => {
  let component: DashboardHealthStatsComponent;
  let fixture: ComponentFixture<DashboardHealthStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHealthStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHealthStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export { DashboardHealthStatsComponent };
