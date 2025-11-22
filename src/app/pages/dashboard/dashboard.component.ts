// src/app/pages/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { DashboardMuscleGroupCardComponent } from '../../dashboard-muscle-group-card/dashboard-muscle-group-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardMuscleGroupCardComponent],
  template: `
    <div class="dashboard">
      <dashboard-muscle-group-card title="Chest" [muscleCount]="12"></dashboard-muscle-group-card>
      <dashboard-muscle-group-card title="Back" [muscleCount]="8"></dashboard-muscle-group-card>
      <dashboard-muscle-group-card title="Legs" [muscleCount]="10"></dashboard-muscle-group-card>
    </div>
  `,
  styles: [`
    .dashboard {
      display: block;
      gap: 1rem;
      flex-wrap: wrap;
    }
  `]
})
export class DashboardComponent {}
