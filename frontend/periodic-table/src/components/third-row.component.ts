import {Component} from '@angular/core'

@Component({
    selector: 'third-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
       <!-- Sodium -->
       <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-4 text-center text-white font-mont mr-1">Na</div>
       <!-- Magnesium -->
       <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-4 text-center text-white font-mont mr-5">Mg</div>
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
       <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1 ml-6">Al</div>
       <!-- Silicon -->
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-4 text-center text-white font-mont mr-1">Si</div>
       <!-- Phosphorus -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">P</div>
       <!-- Sulfur -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">S</div>
       <!-- Chlorine -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">Cl</div>
       <!-- Argon -->
       <div class="element bg-gradient-to-r from-lime-400 to-green-700 p-4 text-center text-white font-mont">Ar</div>
      </div>
     </div>
    `
    ,
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
export class ThirdRow {

}