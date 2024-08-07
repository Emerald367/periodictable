import {Component} from '@angular/core'

@Component({
   selector: 'ninth-row',
   standalone: true,
   template: `
      <div class="max-w-full overflow-x-auto mb-5">
       <div class="flex flex-wrap justify-center">
         <!-- Empty Spaces -->
         <div class="empty-space"></div>
         <div class="empty-space"></div>
         <div class="empty-space"></div>
         <!-- Actinium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 ml-2">Ac</div>
         <!-- Thorium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Th</div>
         <!-- Protactinium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Pa</div>
         <!-- Uranium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">U</div>
         <!-- Neptunium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Np</div>
         <!-- Plutonium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Pu</div>
         <!-- Americium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Am</div>
         <!-- Curium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Cm</div>
         <!-- Berkelium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Bk</div>
         <!-- Californium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Cf</div>
         <!-- Einsteinium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Es</div>
         <!-- Fermium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Fm</div>
         <!-- Mendelevium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">Md</div>
         <!-- Nobelium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">No</div>
         <!-- Lawrencium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont">Lr</div>
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
            flex: 1 0 5.55%;
            max-width: 4.55%;
            min-width: 50px;
          }
   `]
})
export class NinthRow {

}