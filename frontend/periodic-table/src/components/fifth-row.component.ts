import {Component} from '@angular/core'

@Component({
    selector: 'fifth-row',
    standalone: true,
    template: `
      <div class="max-w-full overflow-x-auto">
       <div class="flex flex-wrap justify-center">
        <!-- Rubidium -->
        <div class="element bg-green-200 p-4 text-center">Rb</div>
        <!-- Strontium -->
        <div class="element bg-teal-200 p-4 text-center">Sr</div>
        <!-- Yttrium -->
        <div class="element bg-indigo-300 p-4 text-center">Y</div>
        <!-- Zirconium -->
        <div class="element bg-yellow-200 p-4 text-center">Zr</div>
        <!-- Niobium -->
        <div class="element bg-red-200 p-4 text-center">Nb</div>
        <!-- Molybdenum -->
        <div class="element bg-blue-200 p-4 text-center">Mo</div>
        <!-- Technetium --> 
        <div class="element bg-pink-400 p-4 text-center">Tc</div>
        <!-- Ruthenium -->
        <div class="element bg-orange-200 p-4 text-center">Ru</div>
        <!--Rhodium -->
        <div class="element bg-violet-400 p-4 text-center">Rh</div>
        <!-- Palladium -->
        <div class="element bg-red-200 p-4 text-center">Pd</div>
        <!-- Silver --> 
        <div class="element bg-green-300 p-4 text-center">Ag</div>
        <!-- Cadmium -->
        <div class="element bg-pink-200 p-4 text-center">Cd</div>
        <!-- Indium -->
        <div class="element bg-blue-200 p-4 text-center">In</div>
        <!-- Tin -->
        <div class="element bg-yellow-200 p-4 text-center">Sn</div>
        <!-- Antimony --> 
        <div class="element bg-violet-200 p-4 text-center">Sb</div>
        <!-- Tellerium --> 
        <div class="element bg-green-200 p-4 text-center">Te</div>
        <!-- Iodine -->
        <div class="element bg-red-200 p-4 text-center">I</div>
        <!-- Xenon -->
        <div class="element bg-blue-200 p-4 text-center">Xe</div>
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