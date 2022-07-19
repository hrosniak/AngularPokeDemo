import { Component, OnInit } from '@angular/core';
import { PokemonType } from "../models/pokemon-type";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  totalWeight!: number;
  totalHeight!: number;
  totalPokemon!: number;

  pokemon: PokemonType[] = [
    {
      name:  'bulbasaur',
      height: 7,
      id: 1,
      type: 'grass',
      weight:69,
      showBoolean: true
    },
    {
      name: 'sandshrew',
      height: 6,
      id: 27,
      type: 'ground',
      weight:120,
      showBoolean: false
    },
    {
      name: 'koffing',
      height: 6,
      id: 109,
      type: 'poison',
      weight:10,
      showBoolean: true
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    // this.countTotalWeight();
    // this.countTotalHeight();
    this.countTotalPokemon();
  }

  // countTotalWeight(): void {
  //   this.totalWeight = this.pokemon
  //     .map((pokemon) => pokemon.weight)
  //     .reduce((prev, next) => prev + next);
  // }
  //
  // countTotalHeight(): void {
  //   this.totalHeight = this.pokemon
  //     .map((pokemon) => pokemon.height)
  //     .reduce((prev, next) => prev + next);
  // }

  countTotalPokemon(): void {
    this.totalPokemon = this.pokemon.length
  }
}
