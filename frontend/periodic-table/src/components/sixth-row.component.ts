import {Component} from '@angular/core'

@Component({
    selector: 'sixth-row',
    standalone: true, 
    template: `
      <div class="max-w-full overflow-x-auto mb-1">
       <div class="flex flex-wrap justify-center">
         <!-- Cesium -->
         <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-4 text-center text-white font-mont mr-1">Cs</div>
         <!-- Barium -->
         <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-4 text-center text-white font-mont mr-1">Ba</div>
         <!-- Empty Spaces -->
         <div class="empty-space"></div>
         <!-- Hafnium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1 ml-1">Hf</div>
         <!-- Tantalum -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Ta</div>
         <!-- Tungsten -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">W</div>
         <!-- Rhenium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Re</div>
         <!-- Osmium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Os</div>
         <!-- Iridium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Ir</div>
         <!-- Platinum -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Pt</div>
         <!-- Gold -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Au</div>
         <!-- Mercury -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Hg</div>
         <!-- Thallium -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1">TI</div>
         <!-- Lead -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1">Pb</div>
         <!-- Bismuth -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1">Bi</div>
         <!-- Polonium -->
         <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-4 text-center text-white font-mont mr-1">Po</div>
         <!-- Astatine --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">At</div>
         <!-- Radon -->
         <div class="element bg-gradient-to-r from-lime-400 to-green-700 p-4 text-center text-white font-mont">Rn</div>
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
export class SixthRow {

}