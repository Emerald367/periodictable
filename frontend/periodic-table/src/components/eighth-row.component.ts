import {Component} from '@angular/core'

@Component({
    selector: 'eighth-row',
    standalone: true,
    template: `
       <div class="max-w-full overflow-x-auto">
        <div class="flex flex-wrap justify-center">
          <!-- Empty Spaces -->
          <div class="empty-space"></div>
          <div class="empty-space"></div>
          <div class="empty-space"></div>
          <!-- Lanthanum -->
          <div class="element bg-red-200 p-4 text-center">La</div>
          <!-- Cerium -->
          <div class="element bg-yellow-200 p-4 text-center">Ce</div>
          <!-- Praseodymium -->
          <div class="element bg-blue-200 p-4 text-center">Pr</div>
          <!-- Neodymium -->
          <div class="element bg-violet-200 p-4 text-center">Nd</div>
          <!-- Promethium -->
          <div class="element bg-green-200 p-4 text-center">Pm</div>
          <!-- Samarium -->
          <div class="element bg-orange-200 p-4 text-center">Sm</div>
          <!-- Europium -->
          <div class="element bg-teal-200 p-4 text-center">Eu</div>
          <!--Gadolinium -->
          <div class="element bg-red-200 p-4 text-center">Gd</div>
          <!-- Terbium --> 
          <div class="element bg-violet-200 p-4 text-center">Tb</div>
          <!-- Dysprosium -->
          <div class="element bg-green-200 p-4 text-center">Dy</div>
          <!-- Holomium --> 
          <div class="element bg-yellow-200 p-4 text-center">Ho</div>
          <!-- Erbium -->
          <div class="element bg-blue-200 p-4 text-center">Er</div>
          <!-- Thulium -->
          <div class="element bg-orange-200 p-4 text-center">Tm</div>
          <!-- Ytterbium -->
          <div class="element bg-red-200 p-4 text-center">Yb</div>
          <!-- Lutetium -->
          <div class="element bg-green-200 p-4 text-center">Lu</div>
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
export class EighthRow {

}