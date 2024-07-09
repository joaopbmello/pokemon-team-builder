import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Pokemon } from "../types";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokedexes: string[];
  addToTeam: (pokemon: Pokemon) => void;
}

const typeOptions = [
  { value: "normal", label: "Normal" },
  { value: "fighting", label: "Fighting" },
  { value: "flying", label: "Flying" },
  { value: "poison", label: "Poison" },
  { value: "ground", label: "Ground" },
  { value: "rock", label: "Rock" },
  { value: "bug", label: "Bug" },
  { value: "ghost", label: "Ghost" },
  { value: "steel", label: "Steel" },
  { value: "fire", label: "Fire" },
  { value: "water", label: "Water" },
  { value: "grass", label: "Grass" },
  { value: "electric", label: "Electric" },
  { value: "psychic", label: "Psychic" },
  { value: "ice", label: "Ice" },
  { value: "dragon", label: "Dragon" },
  { value: "dark", label: "Dark" },
  { value: "fairy", label: "Fairy" },
];

const typeColors: { [key: string]: string } = {
  normal: "#B7B8B7",
  fighting: "#FF8000",
  flying: "#81b9ef",
  poison: "#9040cc",
  ground: "#915121",
  rock: "#afa981",
  bug: "#91a119",
  ghost: "#704170",
  steel: "#60a1b8",
  fire: "#e62829",
  water: "#2980ef",
  grass: "#42a129",
  electric: "#fac000",
  psychic: "#f14179",
  ice: "#3fd8ff",
  dragon: "#5061e1",
  dark: "#50413f",
  fairy: "#f170f1",
};

const customStyles = {
  multiValue: (styles: any, { data }: any) => {
    const color = typeColors[data.value];
    return {
      ...styles,
      backgroundColor: color,
    };
  },
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles: any, { data }: any) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: typeColors[data.value],
      color: "white",
    },
  }),
};

function PokemonGrid({ pokedexes, addToTeam }: PokemonGridProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsData: Pokemon[] = [];

      for (const pokedex of pokedexes) {
        const pokedexResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokedex/${pokedex}`,
        );
        const entries = pokedexResponse.data.pokemon_entries;

        const entryDetails = await Promise.all(
          entries.map(async (entry: any) => {
            const pokemonDetails = await axios.get(
              entry.pokemon_species.url.replace("-species", ""),
            );
            return {
              id: pokemonDetails.data.id,
              name: pokemonDetails.data.name,
              types: pokemonDetails.data.types.map(
                (type: any) => type.type.name,
              ),
            };
          }),
        );

        pokemonsData.push(...entryDetails);
      }

      setPokemons(pokemonsData);
    };

    fetchPokemons();
  }, [pokedexes]);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesSearchTerm = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedTypes.length === 0 ||
      pokemon.types.some((type) => selectedTypes.includes(type));
    return matchesSearchTerm && matchesType;
  });

  const handleTypeChange = (selectedOptions: any) => {
    setSelectedTypes(
      selectedOptions ? selectedOptions.map((option: any) => option.value) : [],
    );
  };

  return (
    <>
      <div className="mx-10 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon"
          className="mr-2 h-10 w-2/3 rounded-md border border-neutral-300 p-2 outline-blue-500"
        />
        <Select
          isMulti
          options={typeOptions}
          styles={customStyles}
          className="w-1/3"
          onChange={handleTypeChange}
          placeholder="Filter by Type"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addToTeam={addToTeam}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonGrid;
