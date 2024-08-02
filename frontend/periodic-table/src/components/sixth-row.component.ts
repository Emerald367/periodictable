import {Component} from '@angular/core'

@Component({
    selector: 'sixth-row',
    standalone: true, 
    template: `
      <div class="max-w-full overflow-x-auto">
       <div class="flex flex-wrap justify-center">
         <!-- Cesium -->
         <div class="element bg-red-200 p-4 text-center">Cs</div>
         <!-- Barium -->
         <div class="element bg-green-200 p-4 text-center">Ba</div>
         <!-- Empty Spaces -->
         <div class="empty-space"></div>
         <!-- Hafnium -->
         <div class="element bg-yellow-200 p-4 text-center">Hf</div>
         <!-- Tantalum -->
         <div class="element bg-violet-200 p-4 text-center">Ta</div>
         <!-- Tungsten -->
         <div class="element bg-orange-200 p-4 text-center">W</div>
         <!-- Rhenium -->
         <div class="element bg-lime-200 p-4 text-center">Re</div>
         <!-- Osmium -->
         <div class="element bg-red-200 p-4 text-center">Os</div>
         <!-- Iridium -->
         <div class="element bg-green-200 p-4 text-center">Ir</div>
         <!-- Platinum -->
         <div class="element bg-pink-200 p-4 text-center">Pt</div>
         <!-- Gold -->
         <div class="element bg-yellow-200 p-4 text-center">Au</div>
         <!-- Mercury -->
         <div class="element bg-violet-300 p-4 text-center">Hg</div>
         <!-- Thallium -->
         <div class="element bg-orange-200 p-4 text-center">TI</div>
         <!-- Lead -->
         <div class="element bg-red-200 p-4 text-center">Pb</div>
         <!-- Bismuth -->
         <div class="element bg-gray-200 p-4 text-center">Bi</div>
         <!-- Polonium -->
         <div class="element bg-green-200 p-4 text-center">Po</div>
         <!-- Astatine --> 
         <div class="element bg-violet-200 p-4 text-center">At</div>
         <!-- Radon -->
         <div class="element bg-blue-200 p-4 text-center">Rn</div>
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