import {Component} from '@angular/core'

@Component({
    selector: 'fifth-row',
    standalone: true,
    template: `
      <div class="max-w-full overflow-x-auto mb-1">
       <div class="flex flex-wrap justify-center">
        <!-- Rubidium -->
        <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-4 text-center text-white font-mont  mr-1">Rb</div>
        <!-- Strontium -->
        <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-4 text-center text-white font-mont mr-1">Sr</div>
        <!-- Yttrium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Y</div>
        <!-- Zirconium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Zr</div>
        <!-- Niobium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Nb</div>
        <!-- Molybdenum -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Mo</div>
        <!-- Technetium --> 
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Tc</div>
        <!-- Ruthenium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Ru</div>
        <!--Rhodium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Rh</div>
        <!-- Palladium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Pd</div>
        <!-- Silver --> 
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Ag</div>
        <!-- Cadmium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-4 text-center text-white font-mont mr-1">Cd</div>
        <!-- Indium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1">In</div>
        <!-- Tin -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-4 text-center text-white font-mont mr-1">Sn</div>
        <!-- Antimony --> 
        <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-4 text-center text-white font-mont mr-1">Sb</div>
        <!-- Tellerium --> 
        <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-4 text-center text-white font-mont mr-1">Te</div>
        <!-- Iodine -->
        <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-4 text-center text-white font-mont mr-1">I</div>
        <!-- Xenon -->
        <div class="element bg-gradient-to-r from-lime-400 to-green-700 p-4 text-center text-white font-mont">Xe</div>
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
export class FifthRow {

}