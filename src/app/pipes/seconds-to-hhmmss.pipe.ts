// src/app/pipes/seconds-to-hhmmss.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHHMMSS',
  standalone: true
})
export class SecondsToHHMMSSPipe implements PipeTransform {
  transform(totalSeconds: number): string {
    if (!totalSeconds && totalSeconds !== 0) return '00:00:00';

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}