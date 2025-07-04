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
    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9000 },
        { id: 2, name: 'Vegeta', power: 8000 },
        { id: 4, name: 'Yamcha', power: 500 },
        { id: 3, name: 'Piccolo', power: 3000 },
        
    ]);
}