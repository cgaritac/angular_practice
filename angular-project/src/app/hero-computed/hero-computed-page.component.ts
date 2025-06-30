import { UpperCasePipe } from '@angular/common';
import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'hero-computed-page',
    templateUrl: './hero-computed-page.compontent.html',
    imports: [UpperCasePipe],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroCoputedPageComponent {
    public name = signal('Ironman');
    public age = signal(45);

    public heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    public capitalizeName = computed(() => this.name().toUpperCase())

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