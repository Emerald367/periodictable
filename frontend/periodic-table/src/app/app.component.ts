import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div class="min-h-screen min-w-full bg-slate-800">
  </div>`,
  styles: []
})
export class AppComponent {
  title = 'Element Explorer';
}
