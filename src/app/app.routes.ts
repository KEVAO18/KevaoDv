import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ContactMeComponent } from './paginas/contact-me/contact-me.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent }
];
