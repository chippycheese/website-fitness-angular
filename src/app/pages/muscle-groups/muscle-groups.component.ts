import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MuscleGroupData } from '../../../models/muscle-group';
import muscleGroups from '../../../assets/muscle-groups.json';


@Component({
  selector: 'app-muscle-groups',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.scss']
})

export class MuscleGroupsComponent {
  data: MuscleGroupData = muscleGroups;

  isArray(value: any): value is any[] {
  return Array.isArray(value);
}
}


