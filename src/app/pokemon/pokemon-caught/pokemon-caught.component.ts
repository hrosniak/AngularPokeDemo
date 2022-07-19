import { Component, Input } from '@angular/core';

@Component({
  selector: 'pk-pokemon-caught',
  templateUrl: './pokemon-caught.component.html',
  styleUrls: ['./pokemon-caught.component.scss']
})
export class PokemonCaughtComponent {
  @Input() totalPokemon!: number
}
