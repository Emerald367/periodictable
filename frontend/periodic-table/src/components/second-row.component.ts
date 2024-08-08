import {Component} from '@angular/core'

@Component({
    selector: 'second-row',
    standalone: true,
    template: `
       <div class="max-w-full overflow-x-auto mb-1">
        <div class="flex flex-wrap justify-center">
         <!-- Lithium -->
         <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-red-600 border-2">
           <div class="atomic-number text-xs">3</div>
           <div class="symbol text-sm">Li</div>
           <div class="element-name text-xs">Lithium</div>
           <div class="atomic-weight text-xs">7.00</div>
         </div>
         <!-- Beryllium -->
         <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-1 text-center text-white font-mont mr-5 hover:border-green-400 border-amber-600 border-2">
           <div class="atomic-number text-xs">4</div>
           <div class="symbol text-sm">Be</div>
           <div class="element-name text-xs">Beryllium</div>
           <div class="atomic-weight text-xs">9.012183</div>
         </div>
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
         <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-1 text-center text-white font-mont ml-6 mr-1 hover:border-green-400 border-violet-700 border-2">
           <div class="atomic-number text-xs">5</div>
           <div class="symbol text-sm">B</div>
           <div class="element-name text-xs">Boron</div>
           <div class="atomic-weight text-xs">10.81</div>
         </div>
         <!-- Carbon -->
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">6</div>
           <div class="symbol text-sm">C</div>
           <div class="element-name text-xs">Carbon</div>
           <div class="atomic-weight text-xs">12.011</div>
         </div>
         <!-- Nitrogen -->
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">7</div>
           <div class="symbol text-sm">N</div>
           <div class="element-name text-xs">Nitrogen</div>
           <div class="atomic-weight text-xs">14.007</div>
         </div>
         <!-- Oxygen --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">8</div>
           <div class="symbol text-sm">O</div>
           <div class="element-name text-xs">Oxygen</div>
           <div class="atomic-weight text-xs">15.999</div>
         </div>
         <!-- Fluorine --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">9</div>
           <div class="symbol text-sm">F</div>
           <div class="element-name text-xs">Fluorine</div>
           <div class="atomic-weight text-xs">18.998</div>
         </div>
         <!-- Neon -->
         <div class="element bg-gradient-to-r from-lime-500 to-green-700 p-1 text-center text-white font-mont hover:border-green-400 border-green-700 border-2">
           <div class="atomic-number text-xs">10</div>
           <div class="symbol text-sm">Ne</div>
           <div class="element-name text-xs">Neon</div>
           <div class="atomic-weight text-xs">20.180</div>
         </div>
        </div>
       </div>
    `,
    styles: [`
      .element {
        flex: 1 0 5.55%; 
        max-width: 4.55%; 
        min-width: 50px; 
        height: 75px;
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