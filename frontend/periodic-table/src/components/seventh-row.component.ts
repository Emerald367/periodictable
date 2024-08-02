import {Component} from '@angular/core'

@Component({
   selector: 'seventh-row',
   standalone: true,
   template: `
     <div class="max-w-full overflow-x-auto">
      <div class="flex flex-wrap justify-center">
        <!-- Francium -->
        <div class="element bg-red-200 text-center p-4">Fr</div>
        <!-- Radium -->
        <div class="element bg-yellow-200 text-center p-4">Ra</div>
        <!-- Empty Spaces -->
        <div class="empty-space"></div>
        <!-- Rutherfordium -->
        <div class="element bg-green-200 text-center p-4">Rf</div>
        <!-- Dubnium -->
        <div class="element bg-violet-200 text-center p-4">Db</div>
        <!-- Seaborgium -->
        <div class="element bg-orange-200 text-center p-4">Sg</div>
        <!-- Bohrium -->
        <div class="element bg-lime-300 text-center p-4">Bh</div>
        <!-- Hassium -->
        <div class="element bg-pink-300 text-center p-4">Hs</div>
        <!-- Meitnerium -->
        <div class="element bg-gray-300 text-center p-4">Mt</div>
        <!-- Darmstadtium -->
        <div class="element bg-red-200 text-center p-4">Ds</div>
        <!-- Roentgenium -->
        <div class="element bg-yellow-200 text-center p-4">Rg</div>
        <!-- Copernicium -->
        <div class="element bg-green-300 text-center p-4">Cn</div>
        <!-- Nihonium -->
        <div class="element bg-orange-200 text-center p-4">Nh</div>
        <!-- Flerovium -->
        <div class="element bg-pink-400 text-center p-4">FI</div>
        <!-- Moscovium -->
        <div class="element bg-lime-300 text-center p-4">Mc</div>
        <!-- Livermorium -->
        <div class="element bg-violet-200 text-center p-4">Lv</div>
        <!-- Tennessine -->
        <div class="element bg-red-500 text-center p-4">Ts</div>
        <!-- Oganesson -->
        <div class="element bg-green-500 text-center p-4">Og</div>
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
        min-width: 69px;
      }
   `]
})
export class SeventhRow {

}