import {Component} from '@angular/core'

@Component({
    selector: 'eighth-row',
    standalone: true,
    template: `
       <div class="max-w-full overflow-x-auto mt-3 mb-1">
        <div class="flex flex-wrap justify-center">
          <!-- Empty Spaces -->
          <div class="empty-space"></div>
          <div class="empty-space"></div>
          <div class="empty-space"></div>
          <!-- Lanthanum -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1 ml-2">La</div>
          <!-- Cerium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Ce</div>
          <!-- Praseodymium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Pr</div>
          <!-- Neodymium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Nd</div>
          <!-- Promethium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Pm</div>
          <!-- Samarium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Sm</div>
          <!-- Europium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Eu</div>
          <!--Gadolinium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Gd</div>
          <!-- Terbium --> 
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Tb</div>
          <!-- Dysprosium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Dy</div>
          <!-- Holomium --> 
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Ho</div>
          <!-- Erbium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Er</div>
          <!-- Thulium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Tm</div>
          <!-- Ytterbium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont mr-1">Yb</div>
          <!-- Lutetium -->
          <div class="element bg-gradient-to-r from-cyan-300 to-cyan-700 p-4 text-center text-white font-mont">Lu</div>
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