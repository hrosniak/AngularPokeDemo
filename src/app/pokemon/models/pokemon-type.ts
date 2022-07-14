export type pokemonTypes =  'grass' | 'ground' | 'poison'

export interface PokemonType {
  name: string;
  height: number;
  id: number;
  type: pokemonTypes;
  weight: number;
  showBoolean: boolean;
}
