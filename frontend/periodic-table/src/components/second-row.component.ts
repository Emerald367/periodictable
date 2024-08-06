import {Component} from '@angular/core'

@Component({
    selector: 'second-row',
    standalone: true,
    template: `
       <div class="max-w-full overflow-x-auto mb-1">
        <div class="flex flex-wrap justify-center">
         <!-- Lithium -->
         <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-4 text-center text-white font-mont mr-1">Li</div>
         <!-- Beryllium -->
         <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-4 text-center text-white font-mont mr-5">Be</div>
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
         <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-4 text-center text-white font-mont ml-6 mr-1">B</div>
         <!-- Carbon -->
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">C</div>
         <!-- Nitrogen -->
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">N</div>
         <!-- Oxygen --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">O</div>
         <!-- Fluorine --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">F</div>
         <!-- Neon -->
         <div class="element bg-gradient-to-r from-lime-400 to-green-700  p-4 text-center text-white font-mont">Ne</div>
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
        min-width: 49.4px;
      }
    `]
})
export class SecondRow {

}