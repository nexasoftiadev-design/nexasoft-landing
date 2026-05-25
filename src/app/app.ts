import { Component } from '@angular/core';
import { LandingPageComponent } from './features/landing/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'NexaSoft IA';
}
