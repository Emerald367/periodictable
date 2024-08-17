import {Component} from '@angular/core'
import {Routes, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router'
import {CommonModule} from '@angular/common'

@Component({
    selector: 'first-row',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, CommonModule, RouterOutlet],
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
        <!-- Hydrogen -->
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-1 hover:border-green-400 border-blue-700 border-2"><a routerLink="/hydrogen" routerLinkActive="active" ariaCurrentWhenActive="page">
          <div class="atomic-number text-xs">1</div>
          <div class="symbol text-sm">H</div>
          <div class="element-name text-xs">Hydrogen</div>
          <div class="atomic-weight text-xs">1.008</div>
         </a></div>
          <!-- Empty spaces -->
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <div class="empty-space"></div>
        <!-- Helium -->
        <div class="element bg-gradient-to-r from-lime-500 to-green-700 p-1 text-center text-white font-mont hover:border-green-400 border-green-700 border-2"><a routerLink="/helium" routerLinkActive="active" ariaCurrentWhenActive="page">
          <div class="atomic-number text-xs">2</div>
          <div class="symbol text-sm">He</div>
          <div class="element-name text-xs">Helium</div>
          <div class="atomic-weight text-xs">4.0026</div>
        </a></div>
      </div>
    </div>
    `
    ,
    styles: [`
      .element {
        flex: 1 0 5.55%; /* Flex-grow, flex-shrink, flex-basis */
        max-width: 4.55%; /* 100% / 18 */
        min-width: 50px; /* Minimum width to main square shape */
        height: 75px;
      }
      .empty-space {
        flex: 1 0 5 5.55%;
        max-width: 5.55%; 
        min-width: 53.4px;
      }
    `]
})
export class FirstRow {

}