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
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 ml-2 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">57</div>
           <div class="symbol text-sm">La</div>
           <div class="lanthanum">Lanthanum</div>
           <div class="atomic-weight text-xs">138.9055</div>
          </div>
          <!-- Cerium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">58</div>
           <div class="symbol text-sm">Ce</div>
           <div class="element-name text-xs">Cerium</div>
           <div class="atomic-weight text-xs">140.116</div>
          </div>
          <!-- Praseodymium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">59</div>
           <div class="symbol text-sm">Pr</div>
           <div class="praseodymium">Praseodymium</div>
           <div class="atomic-weight text-xs">140.907</div>
          </div>
          <!-- Neodymium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">60</div>
           <div class="symbol text-sm">Nd</div>
           <div class="neodymium">Neodymium</div>
           <div class="atomic-weight text-xs">144.24</div>
          </div>
          <!-- Promethium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">61</div>
           <div class="symbol text-sm">Pm</div>
           <div class="promethium">Promethium</div>
           <div class="atomic-weight text-xs">144.91276</div>
          </div>
          <!-- Samarium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">62</div>
           <div class="symbol text-sm">Sm</div>
           <div class="element-name text-xs">Samarium</div>
           <div class="atomic-weight text-xs">150.4</div>
          </div>
          <!-- Europium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">63</div>
           <div class="symbol text-sm">Eu</div>
           <div class="element-name text-xs">Europium</div>
           <div class="atomic-weight text-xs">151.964</div>
          </div>
          <!--Gadolinium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">64</div>
           <div class="symbol text-sm">Gd</div>
           <div class="gadolinium">Gadolinium</div>
           <div class="atomic-weight text-xs">157.2</div>
          </div>
          <!-- Terbium --> 
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">65</div>
           <div class="symbol text-sm">Tb</div>
           <div class="element-name text-xs">Terbium</div>
           <div class="atomic-weight text-xs">158.925</div>
          </div>
          <!-- Dysprosium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">66</div>
           <div class="symbol text-sm">Dy</div>
           <div class="dysprosium">Dysprosium</div>
           <div class="atomic-weight text-xs">162.500</div>
          </div>
          <!-- Holomium --> 
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">67</div>
           <div class="symbol text-sm">Ho</div>
           <div class="element-name text-xs">Holomium</div>
           <div class="atomic-weight text-xs">164.930</div>
          </div>
          <!-- Erbium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">68</div>
           <div class="symbol text-sm">Er</div>
           <div class="element-name text-xs">Erbium</div>
           <div class="atomic-weight text-xs">167.26</div>
          </div>
          <!-- Thulium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">69</div>
           <div class="symbol text-sm">Tm</div>
           <div class="element-name text-xs">Thulium</div>
           <div class="atomic-weight text-xs">168.934</div>
          </div>
          <!-- Ytterbium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont mr-1 hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">70</div>
           <div class="symbol text-sm">Yb</div>
           <div class="ytterbium">Ytterbium</div>
           <div class="atomic-weight text-xs">173.05</div>
          </div>
          <!-- Lutetium -->
          <div class="element bg-gradient-to-r from-cyan-400 to-cyan-700 p-1 text-center text-white font-mont hover:border-green-400 border-cyan-700 border-2">
           <div class="atomic-number text-xs">71</div>
           <div class="symbol text-sm">Lu</div>
           <div class="element-name text-xs">Lutetium</div>
           <div class="atomic-weight text-xs">174.9668</div>
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
          .lanthanum, .neodymium, .ytterbium {
            font-size: 0.62rem;
          }
          .praseodymium {
            font-size: 0.52rem;
          }
          .promethium, .gadolinium, .dysprosium {
            font-size: 0.58rem;
          }
    `]
})
export class EighthRow {

}