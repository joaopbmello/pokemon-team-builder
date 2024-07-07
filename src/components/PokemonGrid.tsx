import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../types";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokedexes: string[];
  addToTeam: (pokemon: Pokemon) => void;
}

function PokemonGrid({ pokedexes, addToTeam }: PokemonGridProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsData: Pokemon[] = [];

      for (const pokedex of pokedexes) {
        const pokedexResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokedex/${pokedex}`
        );
        const entries = pokedexResponse.data.pokemon_entries;

        const entryDetails = await Promise.all(
          entries.map(async (entry: any) => {
            const pokemonDetails = await axios.get(
              entry.pokemon_species.url.replace("-species", "")
            );
            return {
              id: pokemonDetails.data.id,
              name: pokemonDetails.data.name,
              types: pokemonDetails.data.types.map(
                (type: any) => type.type.name
              ),
            };
          })
        );

        pokemonsData.push(...entryDetails);
      }

      setPokemons(pokemonsData);
    };

    fetchPokemons();
  }, [pokedexes]);

  return (
    <div className="flex flex-wrap justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} addToTeam={addToTeam} />
      ))}
    </div>
  );
}

export default PokemonGrid;
