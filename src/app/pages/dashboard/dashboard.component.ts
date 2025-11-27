import { Component } from '@angular/core';
import { KeyValuePipe, NgFor } from '@angular/common';
import { DashboardMuscleGroupCardComponent } from '../../dashboard-muscle-group-card/dashboard-muscle-group-card.component';
import personalBestData from '../../../assets/personal-bests.json';
import { PersonalBestExercise } from '../../../models/personal-best-exercise';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardMuscleGroupCardComponent, NgFor, KeyValuePipe], 
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  grouped: { [key: string]: PersonalBestExercise[] } = {};

  constructor() {
    this.groupExercises();
  }

  groupExercises() {
    const list = personalBestData as PersonalBestExercise[];

    for (const ex of list) {
      if (!this.grouped[ex.muscleGroup]) {
        this.grouped[ex.muscleGroup] = [];
      }
      this.grouped[ex.muscleGroup].push(ex);
    }
  }
}
