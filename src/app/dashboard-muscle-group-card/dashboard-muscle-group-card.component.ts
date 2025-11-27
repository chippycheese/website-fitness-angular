import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PersonalBestExercise } from '../../models/personal-best-exercise';
import { SecondsToHHMMSSPipe } from '../pipes/seconds-to-hhmmss.pipe';

@Component({
  selector: 'dashboard-muscle-group-card',
  standalone: true,
  imports: [NgFor, NgIf, SecondsToHHMMSSPipe],
  templateUrl: './dashboard-muscle-group-card.component.html',
  styleUrls: ['./dashboard-muscle-group-card.component.scss']
})
export class DashboardMuscleGroupCardComponent {
  @Input() group!: { key: string; value: PersonalBestExercise[] };
}
