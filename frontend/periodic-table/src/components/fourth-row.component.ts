import {Component} from '@angular/core'

@Component({
    selector: 'fourth-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto">
      <div class="flex flex-wrap justify-center">
       <!-- Potassium -->
       <div class="element bg-red-200 text-center p-4">K</div>
       <!-- Calcium -->
       <div class="element bg-green-200 text-center p-4">Ca</div>
       <!-- Scandium -->
       <div class="element bg-red-200 text-center p-4">Sc</div>
       <!-- Titanium -->
       <div class="element bg-green-200 text-center p-4">Ti</div>
       <!-- Vanadium --> 
       <div class="element bg-orange-300 text-center p-4">V</div>
       <!--Chromium --> 
       <div class="element bg-indigo-200 text-center p-4">Cr</div>
       <!-- Manganese -->
       <div class="element bg-blue-300 text-center p-4">Mn</div>
       <!-- Iron -->
       <div class="element bg-fuchsia-700 text-center p-4">Fe</div>
       <!-- Cobalt -->
       <div class="element bg-pink-200 text-center p-4">Co</div>
       <!-- Nickel --> 
       <div class="element bg-lime-300 text-center p-4">Ni</div>
       <!-- Copper -->
       <div class="element bg-yellow-200 text-center p-4">Cu</div>
       <!-- Zinc -->
       <div class="element bg-red-200 text-center p-4">Zn</div>
       <!-- Gallium -->
       <div class="element bg-green-300 text-center p-4">Ga</div>
       <!-- Germanium --> 
       <div class="element bg-pink-400 text-center p-4">Ge</div>
       <!-- Arsenic -->
       <div class="element bg-blue-300 text-center p-4">As</div>
       <!-- Selenium -->
       <div class="element bg-yellow-200 text-center p-4">Se</div>
       <!-- Bromine -->
       <div class="element bg-teal-300 text-center p-4">Br</div>
       <!-- Krypton -->
       <div class="element bg-lime-300 text-center p-4">Kr</div>
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