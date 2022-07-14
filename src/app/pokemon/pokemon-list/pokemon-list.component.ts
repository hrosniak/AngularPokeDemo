import { Component, OnInit } from '@angular/core';
import { PokemonType } from "../models/pokemon-type";

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

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

  }
}
