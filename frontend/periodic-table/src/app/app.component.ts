import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroSection } from '../components/intro-section.component'
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
  imports: [RouterOutlet, IntroSection, FirstRow, SecondRow, ThirdRow, FourthRow, FifthRow, SixthRow, SeventhRow, EighthRow, NinthRow],
  template: `<div class="min-h-screen min-w-full bg-slate-800 text-center overflow-y-auto">
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
  </div>`,
  styles: []
})
export class AppComponent {

}
