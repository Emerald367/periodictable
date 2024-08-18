import { Component } from '@angular/core';
import { IntroSection } from '../components/intro-section.component'
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'
import { CommonModule} from '@angular/common'
import { filter } from 'rxjs/operators'
import { FirstRow } from '../components/first-row.component'
import { SecondRow } from '../components/second-row.component'
import { ThirdRow } from '../components/third-row.component'
import { FourthRow } from '../components/fourth-row.component'
import { FifthRow } from '../components/fifth-row.component'
import { SixthRow } from '../components/sixth-row.component'
import { SeventhRow } from '../components/seventh-row.component'
import { EighthRow } from '../components/eighth-row.component'
import { NinthRow } from '../components/ninth-row.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, IntroSection, FirstRow, SecondRow, ThirdRow, FourthRow, FifthRow, SixthRow, SeventhRow, EighthRow, NinthRow],
  template: `
    <ng-container *ngIf="isHomePage; else routedContent">
      <div class="min-h-screen relative min-w-full bg-slate-800 text-center overflow-y-auto">
       <intro-section />
       <first-row />
       <second-row />
       <third-row />
       <fourth-row />
       <fifth-row />
       <sixth-row />
       <seventh-row />
       <eighth-row />
       <ninth-row />
      </div>
     </ng-container>
     <ng-template #routedContent>
       <router-outlet></router-outlet>
     </ng-template>
     `,
  styles: []
})
export class AppComponent {
  isHomePage = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomePage = event.url === '/' || event.url === '/home';
    })
  }
}
