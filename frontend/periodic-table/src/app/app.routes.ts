import { Routes } from '@angular/router';
import { HydrogenComponent } from '../elementcomponents/hydrogen.component';
import { HeliumComponent } from '../elementcomponents/helium.component';

export const routes: Routes = [
    { path: 'hydrogen', component: HydrogenComponent},
    { path: 'helium', component: HeliumComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home'} //Fallback route
];