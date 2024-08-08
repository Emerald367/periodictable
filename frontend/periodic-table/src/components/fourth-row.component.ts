import {Component} from '@angular/core'

@Component({
    selector: 'fourth-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto mb-1">
      <div class="flex flex-wrap justify-center">
       <!-- Potassium -->
       <div class="element bg-gradient-to-r from-pink-500 to-red-600 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-red-600 border-2">
           <div class="atomic-number text-xs">19</div>
           <div class="symbol text-sm">K</div>
           <div class="element-name text-xs">Potassium</div>
           <div class="atomic-weight text-xs">39.0983</div>
       </div>
       <!-- Calcium -->
       <div class="element bg-gradient-to-r from-red-500 to-amber-600 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-amber-600 border-2">
           <div class="atomic-number text-xs">20</div>
           <div class="symbol text-sm">Ca</div>
           <div class="element-name text-xs">Calcium</div>
           <div class="atomic-weight text-xs">40.08</div>
       </div>
       <!-- Scandium -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">21</div>
           <div class="symbol text-sm">Sc</div>
           <div class="element-name text-xs">Scandium</div>
           <div class="atomic-weight text-xs">44.95591</div>
       </div>
       <!-- Titanium -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">22</div>
           <div class="symbol text-sm">Ti</div>
           <div class="element-name text-xs">Titanium</div>
           <div class="atomic-weight text-xs">47.867</div>
       </div>
       <!-- Vanadium --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">23</div>
           <div class="symbol text-sm">V</div>
           <div class="element-name text-xs">Vanadium</div>
           <div class="atomic-weight text-xs">50.9415</div>
       </div>
       <!--Chromium --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">24</div>
           <div class="symbol text-sm">Cr</div>
           <div class="element-name text-xs">Chromium</div>
           <div class="atomic-weight text-xs">51.996</div>
       </div>
       <!-- Manganese -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">25</div>
           <div class="symbol text-sm">Mn</div>
           <div class="manganese">Manganese</div>
           <div class="atomic-weight text-xs">54.93804</div>
       </div>
       <!-- Iron -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">26</div>
           <div class="symbol text-sm">Fe</div>
           <div class="element-name text-xs">Iron</div>
           <div class="atomic-weight text-xs">55.84</div>
       </div>
       <!-- Cobalt -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">27</div>
           <div class="symbol text-sm">Co</div>
           <div class="element-name text-xs">Cobalt</div>
           <div class="atomic-weight text-xs">58.933319</div>
       </div>
       <!-- Nickel --> 
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">28</div>
           <div class="symbol text-sm">Ni</div>
           <div class="element-name text-xs">Nickel</div>
           <div class="atomic-weight text-xs">58.693</div>
       </div>
       <!-- Copper -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">29</div>
           <div class="symbol text-sm">Cu</div>
           <div class="element-name text-xs">Copper</div>
           <div class="atomic-weight text-xs">63.55</div>
       </div>
       <!-- Zinc -->
       <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">30</div>
           <div class="symbol text-sm">Zn</div>
           <div class="element-name text-xs">Zinc</div>
           <div class="atomic-weight text-xs">65.4</div>
       </div>
       <!-- Gallium -->
       <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">31</div>
           <div class="symbol text-sm">Ga</div>
           <div class="element-name text-xs">Gallium</div>
           <div class="atomic-weight text-xs">69.723</div>
       </div>
       <!-- Germanium --> 
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-700 border-2">
           <div class="atomic-number text-xs">32</div>
           <div class="symbol text-sm">Ge</div>
           <div class="germanium">Germanium</div>
           <div class="atomic-weight text-xs">72.63</div>
       </div>
       <!-- Arsenic -->
       <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-700 border-2">
           <div class="atomic-number text-xs">33</div>
           <div class="symbol text-sm">As</div>
           <div class="element-name text-xs">Arsenic</div>
           <div class="atomic-weight text-xs">74.92159</div>
       </div>
       <!-- Selenium -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">34</div>
           <div class="symbol text-sm">Se</div>
           <div class="element-name text-xs">Selenium</div>
           <div class="atomic-weight text-xs">78.97</div>
       </div>
       <!-- Bromine -->
       <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">35</div>
           <div class="symbol text-sm">Br</div>
           <div class="element-name text-xs">Bromine</div>
           <div class="atomic-weight text-xs">79.90</div>
       </div>
       <!-- Krypton -->
       <div class="element bg-gradient-to-r from-lime-500 to-green-700 text-center text-white font-mont p-1 hover:border-green-400 border-green-700 border-2">
           <div class="atomic-number text-xs">36</div>
           <div class="symbol text-sm">Kr</div>
           <div class="element-name text-xs">Krypton</div>
           <div class="atomic-weight text-xs">83.80</div>
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

      .manganese {
        font-size: 0.67rem;
      }
      
      .germanium {
        font-size: 0.64rem;
      }
     `]
})
export class FourthRow {

}