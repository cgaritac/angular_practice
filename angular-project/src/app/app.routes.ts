import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero/hero-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    }
];
