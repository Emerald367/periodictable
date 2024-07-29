import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroSection } from './intro-section.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroSection],
  template: `<div class="min-h-screen min-w-full bg-slate-800">
    <intro-section />
  </div>`,
  styles: []
})
export class AppComponent {

}
