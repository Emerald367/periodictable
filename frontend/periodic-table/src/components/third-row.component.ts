import {Component} from '@angular/core'

@Component({
    selector: 'third-row',
    standalone: true,
    template: `
     <div class="max-w-full overflow-x-auto">
      <div class="flex flex-wrap justify-center">
       <!-- Sodium -->
       <div class="element bg-green-200 p-4 text-center">Na</div>
       <!-- Magnesium -->
       <div class="element bg-red-200 p-4 text-center">Mg</div>
       <!-- Empty Spaces -->
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <div class="empty-space"></div>
       <!-- Aluminum -->
       <div class="element bg-green-200 p-4 text-center">Al</div>
       <!-- Silicon -->
       <div class="element bg-blue-200 p-4 text-center">Si</div>
       <!-- Phosphorus -->
       <div class="element bg-green-200 p-4 text-center">P</div>
       <!-- Sulfur -->
       <div class="element bg-red-200 p-4 text-center">S</div>
       <!-- Chlorine -->
       <div class="element bg-orange-200 p-4 text-center">Cl</div>
       <!-- Argon -->
       <div class="element bg-indigo-200 p-4 text-center">Ar</div>
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
        flex: 1 0 5 5.55%;
        max-width: 5.55%; 
        min-width: 50px;
      }
    `]
})
export class ThirdRow {

}