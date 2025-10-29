import { Component, signal} from '@angular/core';

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component({
    selector: 'app-dragonball',
    templateUrl: './dragonball-page.component.html'
})

export class DragonballComponent {
    name = signal('Gohan');
    power = signal(100);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 8000 },
        { id: 4, name: 'Yamcha', power: 500 },
        { id: 3, name: 'Piccolo', power: 3000 },
        
    ]);

    addCharacter() {
        if (!this.name() || !this.name().trim() || this.power() <= 0) return;
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power(),
        }
        //this.characters().push(newCharacter); Con senales no se recomienda usar el push para agregar un nuevo elemento, se recomienda usar el update para actualizar el estado de la señal.
        this.characters.update((list) => [...list, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}
