import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../types";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  addToTeam: (pokemon: Pokemon) => void;
}

function PokemonGrid({ addToTeam }: PokemonGridProps) {
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
        <PokemonCard key={pokemon.id} pokemon={pokemon} addToTeam={addToTeam} />
      ))}
    </div>
  );
}

export default PokemonGrid;
