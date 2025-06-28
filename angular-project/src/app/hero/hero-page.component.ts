import { Component, OnInit, signal } from '@angular/core';

@Component({
    selector: 'hero-page',
    templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {
    public name = signal('Ironman');
    public age = signal(45);

    public getHeroDescription() {
        return `${this.name()} - ${this.age()}`;
    }

    public changeHero() {
        this.name.update(() => 'Spiderman');
        this.age.update(() => 22);
    }

    public changeAge() {
        this.age.update(() => 60);
    }

    public resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }
}