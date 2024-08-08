import {Component} from '@angular/core'

@Component({
   selector: 'seventh-row',
   standalone: true,
   template: `
     <div class="max-w-full overflow-x-auto">
      <div class="flex flex-wrap justify-center">
        <!-- Francium -->
        <div class="element bg-gradient-to-r from-pink-500 to-red-600 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-red-600 border-2">
           <div class="atomic-number text-xs">87</div>
           <div class="symbol text-sm">Fr</div>
           <div class="element-name text-xs">Francium</div>
           <div class="atomic-weight text-xs">223.019</div>
        </div>
        <!-- Radium -->
        <div class="element bg-gradient-to-r from-red-500 to-amber-600 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-amber-600 border-2">
           <div class="atomic-number text-xs">88</div>
           <div class="symbol text-sm">Ra</div>
           <div class="element-name text-xs">Radium</div>
           <div class="atomic-weight text-xs">226.02</div>
        </div>
        <!-- Empty Spaces -->
        <div class="empty-space"></div>
        <!-- Rutherfordium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 ml-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">104</div>
           <div class="symbol text-sm">Rf</div>
           <div class="rutherfordium">Rutherfordium</div>
           <div class="atomic-weight text-xs">267.122</div>
        </div>
        <!-- Dubnium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">105</div>
           <div class="symbol text-sm">Db</div>
           <div class="element-name text-xs">Dubnium</div>
           <div class="atomic-weight text-xs">268.126</div>
        </div>
        <!-- Seaborgium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">106</div>
           <div class="symbol text-sm">Sg</div>
           <div class="seaborgium">Seaborgium</div>
           <div class="atomic-weight text-xs">222.017</div>
        </div>
        <!-- Bohrium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">107</div>
           <div class="symbol text-sm">Bh</div>
           <div class="element-name text-xs">Bohrium</div>
           <div class="atomic-weight text-xs">270.133</div>
        </div>
        <!-- Hassium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">108</div>
           <div class="symbol text-sm">Hs</div>
           <div class="element-name text-xs">Hassium</div>
           <div class="atomic-weight text-xs">269.13</div>
        </div>
        <!-- Meitnerium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">109</div>
           <div class="symbol text-sm">Mt</div>
           <div class="meitnerium">Meitnerium</div>
           <div class="atomic-weight text-xs">277.154</div>
        </div>
        <!-- Darmstadtium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">110</div>
           <div class="symbol text-sm">Ds</div>
           <div class="darmstadtium">Darmstadtium</div>
           <div class="atomic-weight text-xs">282.166</div>
        </div>
        <!-- Roentgenium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">111</div>
           <div class="symbol text-sm">Rg</div>
           <div class="roentgenium">Roentgenium</div>
           <div class="atomic-weight text-xs">282.169</div>
        </div>
        <!-- Copernicium -->
        <div class="element bg-gradient-to-r from-sky-400 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">112</div>
           <div class="symbol text-sm">Cn</div>
           <div class="copernicium">Copernicium</div>
           <div class="atomic-weight text-xs">286.179</div>
        </div>
        <!-- Nihonium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">113</div>
           <div class="symbol text-sm">Nh</div>
           <div class="element-name text-xs">Nihonium</div>
           <div class="atomic-weight text-xs">286.182</div>
        </div>
        <!-- Flerovium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">114</div>
           <div class="symbol text-sm">FI</div>
           <div class="flerovium">Flerovium</div>
           <div class="atomic-weight text-xs">290.192</div>
        </div>
        <!-- Moscovium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">115</div>
           <div class="symbol text-sm">Mc</div>
           <div class="moscovium">Moscovium</div>
           <div class="atomic-weight text-xs">290.196</div>
        </div>
        <!-- Livermorium -->
        <div class="element bg-gradient-to-r from-violet-500 to-fuchsia-400 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-violet-400 border-2">
           <div class="atomic-number text-xs">116</div>
           <div class="symbol text-sm">Lv</div>
           <div class="livermorium">Livermorium</div>
           <div class="atomic-weight text-xs">293.205</div>
        </div>
        <!-- Tennessine -->
        <div class="element bg-gradient-to-r from-violet-500 to-blue-700 text-center text-white font-mont p-1 mr-1 hover:border-green-400 border-blue-700 border-2">
           <div class="atomic-number text-xs">117</div>
           <div class="symbol text-sm">Ts</div>
           <div class="tennessine">Tennessine</div>
           <div class="atomic-weight text-xs">294.211</div>
        </div>
        <!-- Oganesson -->
        <div class="element bg-gradient-to-r from-lime-500 to-green-700 text-center text-white font-mont p-1 hover:border-green-400 border-green-700 border-2">
           <div class="atomic-number text-xs">118</div>
           <div class="symbol text-sm">Og</div>
           <div class="oganesson">Oganesson</div>
           <div class="atomic-weight text-xs">295.216</div>
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
      .rutherfordium {
        font-size: 0.54rem;
      }
      .copernicium, .livermorium {
        font-size: 0.59rem;
      }
      .darmstadtium {
        font-size: 0.55rem;
      }
      .seaborgium, .meitnerium, .flerovium, .moscovium, .oganesson {
        font-size: 0.63rem;
      }
      .roentgenium, .tennessine {
        font-size: 0.59rem;
      }
   `]
})
export class SeventhRow {

}