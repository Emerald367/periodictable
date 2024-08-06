import {Component} from '@angular/core'

@Component({
    selector: 'fourth-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
       <!-- Potassium -->
       <div class="element bg-gradient-to-r from-pink-500 to-red-600 text-center text-white font-mont p-4 mr-1">K</div>
       <!-- Calcium -->
       <div class="element bg-gradient-to-r from-red-500 to-amber-600 text-center text-white font-mont p-4 mr-1">Ca</div>
       <!-- Scandium -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Sc</div>
       <!-- Titanium -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Ti</div>
       <!-- Vanadium --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">V</div>
       <!--Chromium --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Cr</div>
       <!-- Manganese -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Mn</div>
       <!-- Iron -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Fe</div>
       <!-- Cobalt -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Co</div>
       <!-- Nickel --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Ni</div>
       <!-- Copper -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Cu</div>
       <!-- Zinc -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-4 mr-1">Zn</div>
       <!-- Gallium -->
       <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-4 mr-1">Ga</div>
       <!-- Germanium --> 
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 text-center text-white font-mont p-4 mr-1">Ge</div>
       <!-- Arsenic -->
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 text-center text-white font-mont p-4 mr-1">As</div>
       <!-- Selenium -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-4 mr-1">Se</div>
       <!-- Bromine -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-4 mr-1">Br</div>
       <!-- Krypton -->
       <div class="element bg-gradient-to-r from-lime-400 to-green-700 text-center text-white font-mont p-4">Kr</div>
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
     `]
})
export class FourthRow {

}