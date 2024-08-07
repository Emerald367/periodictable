import {Component} from '@angular/core'

@Component({
    selector: 'sixth-row',
    standalone: true, 
    template: `
      <div class="max-w-full overflow-x-auto mb-1">
       <div class="flex flex-wrap justify-center">
         <!-- Cesium -->
         <div class="element bg-gradient-to-r from-pink-500 to-red-600 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">55</div>
           <div class="symbol text-sm">Cs</div>
           <div class="element-name text-xs">Cesium</div>
           <div class="atomic-weight text-xs">132.905</div>
         </div>
         <!-- Barium -->
         <div class="element bg-gradient-to-r from-red-500 to-amber-600 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">56</div>
           <div class="symbol text-sm">Ba</div>
           <div class="element-name text-xs">Barium</div>
           <div class="atomic-weight text-xs">137.33</div>
         </div>
         <!-- Empty Spaces -->
         <div class="empty-space"></div>
         <!-- Hafnium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1 ml-1">
           <div class="atomic-number text-xs">57</div>
           <div class="symbol text-sm">Hf</div>
           <div class="element-name text-xs">Hafnium</div>
           <div class="atomic-weight text-xs">178.49</div>
         </div>
         <!-- Tantalum -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">58</div>
           <div class="symbol text-sm">Ta</div>
           <div class="element-name text-xs">Tantalum</div>
           <div class="atomic-weight text-xs">180.9479</div>
         </div>
         <!-- Tungsten -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">59</div>
           <div class="symbol text-sm">W</div>
           <div class="element-name text-xs">Tungsten</div>
           <div class="atomic-weight text-xs">183.84</div>
         </div>
         <!-- Rhenium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">60</div>
           <div class="symbol text-sm">Re</div>
           <div class="element-name text-xs">Rhenium</div>
           <div class="atomic-weight text-xs">186.207</div>
         </div>
         <!-- Osmium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">61</div>
           <div class="symbol text-sm">Os</div>
           <div class="element-name text-xs">Osmium</div>
           <div class="atomic-weight text-xs">190.2</div>
         </div>
         <!-- Iridium -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">62</div>
           <div class="symbol text-sm">Ir</div>
           <div class="element-name text-xs">Iridium</div>
           <div class="atomic-weight text-xs">192.22</div>
         </div>
         <!-- Platinum -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">63</div>
           <div class="symbol text-sm">Pt</div>
           <div class="element-name text-xs">Platinum</div>
           <div class="atomic-weight text-xs">195.08</div>
         </div>
         <!-- Gold -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">64</div>
           <div class="symbol text-sm">Au</div>
           <div class="element-name text-xs">Gold</div>
           <div class="atomic-weight text-xs">196.966</div>
         </div>
         <!-- Mercury -->
         <div class="element bg-gradient-to-r from-sky-400 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">65</div>
           <div class="symbol text-sm">Hg</div>
           <div class="element-name text-xs">Mercury</div>
           <div class="atomic-weight text-xs">200.59</div>
         </div>
         <!-- Thallium -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">66</div>
           <div class="symbol text-sm">TI</div>
           <div class="element-name text-xs">Thallium</div>
           <div class="atomic-weight text-xs">204.383</div>
         </div>
         <!-- Lead -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">67</div>
           <div class="symbol text-sm">Pb</div>
           <div class="element-name text-xs">Lead</div>
           <div class="atomic-weight text-xs">207</div>
         </div>
         <!-- Bismuth -->
         <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">68</div>
           <div class="symbol text-sm">Bi</div>
           <div class="element-name text-xs">Bismuth</div>
           <div class="atomic-weight text-xs">208.98</div>
         </div>
         <!-- Polonium -->
         <div class="element bg-gradient-to-r from-fuchsia-500 to-violet-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">69</div>
           <div class="symbol text-sm">Po</div>
           <div class="element-name text-xs">Polonium</div>
           <div class="atomic-weight text-xs">208.98</div>
         </div>
         <!-- Astatine --> 
         <div class="element bg-gradient-to-r from-violet-500 to-blue-700 p-1 text-center text-white font-mont mr-1">
           <div class="atomic-number text-xs">70</div>
           <div class="symbol text-sm">At</div>
           <div class="element-name text-xs">Astatine</div>
           <div class="atomic-weight text-xs">209.98</div>
         </div>
         <!-- Radon -->
         <div class="element bg-gradient-to-r from-lime-500 to-green-700 p-1 text-center text-white font-mont">
           <div class="atomic-number text-xs">71</div>
           <div class="symbol text-sm">Rn</div>
           <div class="element-name text-xs">Radon</div>
           <div class="atomic-weight text-xs">222.017</div>
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
        flex: 1 0 5 5.55%;
        max-width: 5.55%; 
        min-width: 69px;
      }
    `]
})
export class SixthRow {

}