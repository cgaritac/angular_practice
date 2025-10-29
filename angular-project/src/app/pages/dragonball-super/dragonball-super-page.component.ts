import { Component, signal} from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    selector: 'app-dragonball-super',
    templateUrl: './dragonball-super-page.component.html'
})

export class DragonballSuperComponent {
    name = signal('Gohan');
    power = signal(100);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 8000 },
    ]);

    addCharacter() {
        if (!this.name() || !this.name().trim() || this.power() <= 0) return;
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power(),
        }
        this.characters.update((list) => [...list, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
