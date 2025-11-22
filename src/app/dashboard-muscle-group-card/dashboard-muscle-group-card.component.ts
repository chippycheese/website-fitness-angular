// src/app/dashboard-muscle-group-card/dashboard-muscle-group-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-muscle-group-card',
  standalone: true,
  templateUrl: './dashboard-muscle-group-card.component.html',
  // template: ,
  styleUrls: ['./dashboard-muscle-group-card.component.scss']
  // styles: [`
    
  // `]
})
export class DashboardMuscleGroupCardComponent {
  @Input() title!: string;
  @Input() muscleCount!: number;
}
