import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { HeroCoputedPageComponent } from './pages/hero-computed/hero-computed-page.component';
import { CounterComponent } from './pages/counter/counter.component';
import { DragonballComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperComponent } from './pages/dragonball-super/dragonball-super-page.component';

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
        path: 'dragonball',
        component: DragonballComponent
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperComponent
    },
    {
        path: '**',
        redirectTo: '',
    }
];
