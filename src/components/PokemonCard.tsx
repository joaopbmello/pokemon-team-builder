import { Pokemon } from "../types";

const PokemonType: { [key: string]: number } = {
  normal: 1,
  fighting: 2,
  flying: 3,
  poison: 4,
  ground: 5,
  rock: 6,
  bug: 7,
  ghost: 8,
  steel: 9,
  fire: 10,
  water: 11,
  grass: 12,
  electric: 13,
  psychic: 14,
  ice: 15,
  dragon: 16,
  dark: 17,
  fairy: 18,
};

interface PokemonCardProps {
  pokemon: Pokemon;
  addToTeam: (pokemon: Pokemon) => void;
}

function PokemonCard({ pokemon, addToTeam }: PokemonCardProps) {
  return (
    <div
      className="m-5 w-48 rounded-xl border-2 border-gray-300 bg-gray-100 cursor-pointer"
      onClick={() => addToTeam(pokemon)}
    >
      <div className="flex justify-center mt-2">
        <img
          className="size-32"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        />
      </div>
      <h1 className="text-center font-medium text-lg capitalize text-slate-900 mt-1">
        {pokemon.name}
      </h1>
      <div className="flex mx-1 mb-2 justify-center">
        {pokemon.types.map((type) => (
          <img
            key={type}
            className="w-1/2 p-1"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${PokemonType[type]}.png`}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
