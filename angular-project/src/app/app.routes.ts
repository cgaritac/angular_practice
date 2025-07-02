import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero/hero-page.component';
import { HeroCoputedPageComponent } from './hero-computed/hero-computed-page.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: 'hero-computed',
        component: HeroCoputedPageComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
