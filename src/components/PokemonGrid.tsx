import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

function PokemonGrid() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const pokemonsData = response.data.results;

      const pokemonsDetails = await Promise.all(
        pokemonsData.map(async (pokemon: { name: string; url: string }) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return {
            id: pokemonDetails.data.id,
            name: pokemonDetails.data.name,
            types: pokemonDetails.data.types.map((type: any) => type.type.name),
          };
        })
      );

      setPokemons(pokemonsDetails);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;
