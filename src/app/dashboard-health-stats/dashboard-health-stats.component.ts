import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HealthStats } from '../../models/health-stats';
import healthStats from '../../assets/health-stats.json';

@Component({
  selector: 'dashboard-health-stats',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard-health-stats.component.html',
  styleUrl: './dashboard-health-stats.component.scss'
})
export class DashboardHealthStatsComponent {

  data: HealthStats = healthStats;

  get heightFeet(): number {
    return Math.floor(this.data.height / 12);
  }

  get remainingInches(): number {
    return this.data.height % 12;
  }
}

