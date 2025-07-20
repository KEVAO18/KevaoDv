import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ProyectComponent } from './paginas/proyect/proyect.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'project', component: ProyectComponent }
];
