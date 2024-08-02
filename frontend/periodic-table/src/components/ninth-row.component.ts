import {Component} from '@angular/core'

@Component({
   selector: 'ninth-row',
   standalone: true,
   template: `
      <div class="max-w-full overflow-x-auto">
       <div class="flex flex-wrap justify-center">
         <!-- Empty Spaces -->
         <div class="empty-space"></div>
         <div class="empty-space"></div>
         <div class="empty-space"></div>
         <!-- Actinium -->
         <div class="element bg-yellow-200 p-4 text-center">Ac</div>
         <!-- Thorium -->
         <div class="element bg-green-200 p-4 text-center">Th</div>
         <!-- Protactinium -->
         <div class="element bg-red-200 p-4 text-center">Pa</div>
         <!-- Uranium -->
         <div class="element bg-violet-200 p-4 text-center">U</div>
         <!-- Neptunium -->
         <div class="element bg-orange-200 p-4 text-center">Np</div>
         <!-- Plutonium -->
         <div class="element bg-pink-200 p-4 text-center">Pu</div>
         <!-- Americium -->
         <div class="element bg-blue-200 p-4 text-center">Am</div>
         <!-- Curium -->
         <div class="element bg-lime-200 p-4 text-center">Cm</div>
         <!-- Berkelium -->
         <div class="element bg-yellow-200 p-4 text-center">Bk</div>
         <!-- Californium -->
         <div class="element bg-violet-400 p-4 text-center">Cf</div>
         <!-- Einsteinium -->
         <div class="element bg-green-400 p-4 text-center">Es</div>
         <!-- Fermium -->
         <div class="element bg-orange-200 p-4 text-center">Fm</div>
         <!-- Mendelevium -->
         <div class="element bg-red-200 p-4 text-center">Md</div>
         <!-- Nobelium -->
         <div class="element bg-blue-200 p-4 text-center">No</div>
         <!-- Lawrencium -->
         <div class="element bg-purple-800 p-4 text-center">Lr</div>
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
            flex: 1 0 5.55%;
            max-width: 4.55%;
            min-width: 50px;
          }
   `]
})
export class NinthRow {

}