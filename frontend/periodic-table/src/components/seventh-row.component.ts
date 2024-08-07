import {Component} from '@angular/core'

@Component({
   selector: 'seventh-row',
   standalone: true,
   template: `
     <div class="max-w-full overflow-x-auto">
      <div class="flex flex-wrap justify-center">
        <!-- Francium -->
        <div class="element bg-gradient-to-r from-pink-500 to-red-600 text-center text-white font-mont p-1 mr-1">Fr</div>
        <!-- Radium -->
        <div class="element bg-gradient-to-r from-red-500 to-amber-600 text-center text-white font-mont p-1 mr-1">Ra</div>
        <!-- Empty Spaces -->
        <div class="empty-space"></div>
        <!-- Rutherfordium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 ml-1">Rf</div>
        <!-- Dubnium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Db</div>
        <!-- Seaborgium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Sg</div>
        <!-- Bohrium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Bh</div>
        <!-- Hassium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Hs</div>
        <!-- Meitnerium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Mt</div>
        <!-- Darmstadtium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Ds</div>
        <!-- Roentgenium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Rg</div>
        <!-- Copernicium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1">Cn</div>
        <!-- Nihonium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1">Nh</div>
        <!-- Flerovium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1">FI</div>
        <!-- Moscovium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1">Mc</div>
        <!-- Livermorium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1">Lv</div>
        <!-- Tennessine -->
        <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-1 mr-1">Ts</div>
        <!-- Oganesson -->
        <div class="element bg-gradient-to-r from-lime-500 to-green-700 text-center text-white font-mont p-1">Og</div>
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
        min-width: 69px;
      }
   `]
})
export class SeventhRow {

}