import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCaughtComponent } from './pokemon-caught/pokemon-caught.component';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCaughtComponent
  ],
  exports: [PokemonListComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
