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
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 ml-2">
           <div class="atomic-number text-xs">89</div>
           <div class="symbol text-sm">Ac</div>
           <div class="element-name text-xs">Actinium</div>
           <div class="atomic-weight text-xs">227.027</div>
         </div>
         <!-- Thorium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">90</div>
           <div class="symbol text-sm">Th</div>
           <div class="element-name text-xs">Thorium</div>
           <div class="atomic-weight text-xs">232.038</div>
         </div>
         <!-- Protactinium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">91</div>
           <div class="symbol text-sm">Pa</div>
           <div class="protactinium">Protactinium</div>
           <div class="atomic-weight text-xs">231.03588</div>
         </div>
         <!-- Uranium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">92</div>
           <div class="symbol text-sm">U</div>
           <div class="element-name text-xs">Uranium</div>
           <div class="atomic-weight text-xs">238.029</div>
         </div>
         <!-- Neptunium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">93</div>
           <div class="symbol text-sm">Np</div>
           <div class="neptunium">Neptunium</div>
           <div class="atomic-weight text-xs">237.04</div>
         </div>
         <!-- Plutonium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">94</div>
           <div class="symbol text-sm">Pu</div>
           <div class="plutonium">Plutonium</div>
           <div class="atomic-weight text-xs">244.06</div>
         </div>
         <!-- Americium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">95</div>
           <div class="symbol text-sm">Am</div>
           <div class="element-name text-xs">Americium</div>
           <div class="atomic-weight text-xs">243.061</div>
         </div>
         <!-- Curium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">96</div>
           <div class="symbol text-sm">Cm</div>
           <div class="element-name text-xs">Curium</div>
           <div class="atomic-weight text-xs">247.07</div>
         </div>
         <!-- Berkelium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">97</div>
           <div class="symbol text-sm">Bk</div>
           <div class="element-name text-xs">Berkelium</div>
           <div class="atomic-weight text-xs">247.070</div>
         </div>
         <!-- Californium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">98</div>
           <div class="symbol text-sm">Cf</div>
           <div class="californium">Californium</div>
           <div class="atomic-weight text-xs">251.079</div>
         </div>
         <!-- Einsteinium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">99</div>
           <div class="symbol text-sm">Es</div>
           <div class="einsteinium">Einsteinium</div>
           <div class="atomic-weight text-xs">252.0830</div>
         </div>
         <!-- Fermium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">100</div>
           <div class="symbol text-sm">Fm</div>
           <div class="element-name text-xs">Fermium</div>
           <div class="atomic-weight text-xs">257.0</div>
         </div>
         <!-- Mendelevium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">101</div>
           <div class="symbol text-sm">Md</div>
           <div class="mendelevium">Mendelevium</div>
           <div class="atomic-weight text-xs">258.09</div>
         </div>
         <!-- Nobelium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">102</div>
           <div class="symbol text-sm">No</div>
           <div class="element-name text-xs">Nobelium</div>
           <div class="atomic-weight text-xs">259.10</div>
         </div>
         <!-- Lawrencium -->
         <div class="element bg-gradient-to-r from-green-400 to-cyan-700 p-1 text-center text-white font-mont">
           <div class="atomic-number text-xs">103</div>
           <div class="symbol text-sm">Lr</div>
           <div class="lawrencium">Lawrencium</div>
           <div class="atomic-weight text-xs">266.120</div>
         </div>
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
          .protactinium, .mendelevium {
            font-size: 0.6rem;
          }
          .californium, .einsteinium {
            font-size: 0.64rem;
          }
          .neptunium, .plutonium, .americium, .lawrencium {
            font-size: 0.65rem;
          }
   `]
})
export class NinthRow {

}