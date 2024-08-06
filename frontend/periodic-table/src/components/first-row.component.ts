import {Component} from '@angular/core'

@Component({
    selector: 'first-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
        <!-- Hydrogen -->
        <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-4">
          H
        </div>
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
        <div class="element bg-gradient-to-r from-lime-400 to-green-700 p-4 text-center text-white font-mont">He</div>
      </div>
    </div>
    `
    ,
    styles: [`
      .element {
        flex: 1 0 5.55%; /* Flex-grow, flex-shrink, flex-basis */
        max-width: 4.55%; /* 100% / 18 */
        min-width: 50px; /* Minimum width to main square shape */
        height: 70px;
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