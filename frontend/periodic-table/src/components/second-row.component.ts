import {Component} from '@angular/core'

@Component({
    selector: 'second-row',
    standalone: true,
    template: `
       <div class="max-w-full overflow-x-auto">
        <div class="flex flex-wrap justify-center">
         <!-- Lithium -->
         <div class="element bg-blue-200 p-4 text-center">Li</div>
         <!-- Beryllium -->
         <div class="element bg-green-200 p-4 text-center">Be</div>
         <!-- Empty Spaces -->
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
         <!-- Boron -->
         <div class="element bg-blue-200 p-4 text-center">B</div>
         <!-- Carbon -->
         <div class="element bg-green-200 p-4 text-center">C</div>
         <!-- Nitrogen -->
         <div class="element bg-red-200 p-4 text-center">N</div>
         <!-- Oxygen --> 
         <div class="element bg-orange-200 p-4 text-center">O</div>
         <!-- Fluorine --> 
         <div class="element bg-yellow-200 p-4 text-center">F</div>
         <!-- Neon -->
         <div class="element bg-green-200 p-4 text-center">Ne</div>
        </div>
       </div>
    `,
    styles: [`
      .element {
        flex: 1 0 5.55%; 
        max-width: 4.55%; 
        min-width: 50px; 
        height: 70px;
      }
      .empty-space {
        flex: 1 0 5 5.55%;
        max-width: 5.55%; 
        min-width: 50px;
      }
    `]
})
export class SecondRow {

}