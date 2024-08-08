import {Component} from '@angular/core'

@Component({
    selector: 'third-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
       <!-- Sodium -->
       <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-red-600 border-2">
           <div class="atomic-number text-xs">11</div>
           <div class="symbol text-sm">Na</div>
           <div class="element-name text-xs">Sodium</div>
           <div class="atomic-weight text-xs">22.9897</div>
       </div>
       <!-- Magnesium -->
       <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-1 text-center text-white font-mont mr-5 hover:border-green-400 border-amber-600 border-2">
           <div class="atomic-number text-xs">12</div>
           <div class="symbol text-sm">Mg</div>
           <div class="magnesium">Magnesium</div>
           <div class="atomic-weight text-xs">24.305</div>
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
       <!-- Aluminum -->
       <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1 ml-6 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">13</div>
           <div class="symbol text-sm">Al</div>
           <div class="aluminum">Aluminum</div>
           <div class="atomic-weight text-xs">26.981</div>
       </div>
       <!-- Silicon -->
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-violet-700 border-2">
           <div class="atomic-number text-xs">14</div>
           <div class="symbol text-sm">Si</div>
           <div class="element-name text-xs">Silicon</div>
           <div class="atomic-weight text-xs">28.085</div>
       </div>
       <!-- Phosphorus -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">15</div>
           <div class="symbol text-sm">P</div>
           <div class="phosphorus">Phosphorus</div>
           <div class="atomic-weight text-xs">30.9737</div>
       </div>
       <!-- Sulfur -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">16</div>
           <div class="symbol text-sm">S</div>
           <div class="element-name text-xs">Sulfur</div>
           <div class="atomic-weight text-xs">32.07</div>
       </div>
       <!-- Chlorine -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">17</div>
           <div class="symbol text-sm">Cl</div>
           <div class="element-name text-xs">Chlorine</div>
           <div class="atomic-weight text-xs">35.45</div>
       </div>
       <!-- Argon -->
       <div class="element bg-gradient-to-r from-lime-500 to-green-700 p-1 text-center text-white font-mont hover:border-green-400 border-green-700 border-2">
           <div class="atomic-number text-xs">18</div>
           <div class="symbol text-sm">Ar</div>
           <div class="element-name text-xs">Argon</div>
           <div class="atomic-weight text-xs">39.9</div>
       </div>
      </div>
     </div>
    `
    ,
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
     
      .aluminum {
         font-size: 0.69rem;
      }

      .magnesium {
        font-size: 0.65rem;
      }

      .phosphorus {
        font-size: 0.63rem;
      }
    `]
})
export class ThirdRow {

}