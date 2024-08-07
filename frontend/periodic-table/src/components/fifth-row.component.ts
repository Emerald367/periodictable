import {Component} from '@angular/core'

@Component({
    selector: 'fifth-row',
    standalone: true,
    template: `
      <div class="max-w-full overflow-x-auto mb-1">
       <div class="flex flex-wrap justify-center">
        <!-- Rubidium -->
        <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">37</div>
           <div class="symbol text-sm">Rb</div>
           <div class="element-name text-xs">Rubidium</div>
           <div class="atomic-weight text-xs">85.468</div>
        </div>
        <!-- Strontium -->
        <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">38</div>
           <div class="symbol text-sm">Sr</div>
           <div class="element-name text-xs">Strontium</div>
           <div class="atomic-weight text-xs">87.62</div>
        </div>
        <!-- Yttrium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">39</div>
           <div class="symbol text-sm">Y</div>
           <div class="element-name text-xs">Yttrium</div>
           <div class="atomic-weight text-xs">88.90584</div>
        </div>
        <!-- Zirconium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">40</div>
           <div class="symbol text-sm">Zr</div>
           <div class="zirconium">Zirconium</div>
           <div class="atomic-weight text-xs">91.22</div>
        </div>
        <!-- Niobium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">41</div>
           <div class="symbol text-sm">Nb</div>
           <div class="element-name text-xs">Niobium</div>
           <div class="atomic-weight text-xs">92.90637</div>
        </div>
        <!-- Molybdenum -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">42</div>
           <div class="symbol text-sm">Mo</div>
           <div class="molybdenum">Molybdenum</div>
           <div class="atomic-weight text-xs">95.95</div>
        </div>
        <!-- Technetium --> 
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">43</div>
           <div class="symbol text-sm">Tc</div>
           <div class="technetium">Technetium</div>
           <div class="atomic-weight text-xs">96.90636</div>
        </div>
        <!-- Ruthenium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">44</div>
           <div class="symbol text-sm">Ru</div>
           <div class="ruthenium">Ruthenium</div>
           <div class="atomic-weight text-xs">101.1</div>
        </div>
        <!--Rhodium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">45</div>
           <div class="symbol text-sm">Rh</div>
           <div class="element-name text-xs">Rhodium</div>
           <div class="atomic-weight text-xs">102.9055</div>
        </div>
        <!-- Palladium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">46</div>
           <div class="symbol text-sm">Pd</div>
           <div class="palladium">Palladium</div>
           <div class="atomic-weight text-xs">106.42</div>
        </div>
        <!-- Silver --> 
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">47</div>
           <div class="symbol text-sm">Ag</div>
           <div class="element-name text-xs">Silver</div>
           <div class="atomic-weight text-xs">107.868</div>
        </div>
        <!-- Cadmium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">48</div>
           <div class="symbol text-sm">Cd</div>
           <div class="element-name text-xs">Cadmium</div>
           <div class="atomic-weight text-xs">112.41</div>
        </div>
        <!-- Indium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">49</div>
           <div class="symbol text-sm">In</div>
           <div class="element-name text-xs">Indium</div>
           <div class="atomic-weight text-xs">114.818</div>
        </div>
        <!-- Tin -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">50</div>
           <div class="symbol text-sm">Sn</div>
           <div class="element-name text-xs">Tin</div>
           <div class="atomic-weight text-xs">118.71</div>
        </div>
        <!-- Antimony --> 
        <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">51</div>
           <div class="symbol text-sm">Sb</div>
           <div class="element-name text-xs">Antimony</div>
           <div class="atomic-weight text-xs">121.760</div>
        </div>
        <!-- Tellerium --> 
        <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">52</div>
           <div class="symbol text-sm">Te</div>
           <div class="tellerium">Tellerium</div>
           <div class="atomic-weight text-xs">127.6</div>
        </div>
        <!-- Iodine -->
        <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">53</div>
           <div class="symbol text-sm">I</div>
           <div class="element-name text-xs">Iodine</div>
           <div class="atomic-weight text-xs">126.9045</div>
        </div>
        <!-- Xenon -->
        <div class="element bg-gradient-to-r from-lime-500 to-green-700 p-1 text-center text-white font-mont">
           <div class="atomic-number text-xs">54</div>
           <div class="symbol text-sm">Xe</div>
           <div class="element-name text-xs">Xenon</div>
           <div class="atomic-weight text-xs">131.29</div>
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
        
        .molybdenum {
          font-size: 0.61rem;
        }

        .technetium {
          font-size: 0.64rem;
        }

        .ruthenium, .palladium, .zirconium, .tellerium {
          font-size: 0.7rem;
        }
    `]
})
export class FifthRow {

}