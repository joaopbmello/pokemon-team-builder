export interface Move {
  label: string;
  value: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  moves: Move[];
}

export interface Game {
  id: number;
  name: string;
  generation: string;
  pokedexes: string[];
  versions: string[];
}

export interface Team {
  id: string;
  name: string;
  members: (Pokemon | null)[];
  gameId: string;
  pokedexes: string[];
}
