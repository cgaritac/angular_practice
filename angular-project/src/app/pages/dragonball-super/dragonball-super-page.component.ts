import { Component, signal} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
@Component({
    selector: 'app-dragonball-super',
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterListComponent]
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
