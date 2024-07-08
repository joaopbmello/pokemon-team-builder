import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Pokemon } from "../types";
import NavBar from "./NavBar";
import PokemonGrid from "./PokemonGrid";
import TeamGrid from "./TeamGrid";

const TeamBuilder = () => {
  const { gameId } = useParams();
  const [team, setTeam] = useState<(Pokemon | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [pokedexes, setPokedexes] = useState<string[]>([]);

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameResponse = await axios.get(
        `https://pokeapi.co/api/v2/version-group/${gameId}`
      );
      setPokedexes(
        gameResponse.data.pokedexes.map((pokedex: any) => pokedex.name)
      );
    };

    fetchGameDetails();
  }, [gameId]);

  const addToTeam = (pokemon: Pokemon) => {
    const emptySlotIndex = team.findIndex((slot) => slot === null);
    if (emptySlotIndex !== -1) {
      const newTeam = [...team];
      newTeam[emptySlotIndex] = pokemon;
      setTeam(newTeam);
    }
  };

  const removeFromTeam = (id: number) => {
    const newTeam = team.map((slot) => (slot?.id === id ? null : slot));
    setTeam(newTeam);
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-end items-end mx-10">
        <input
          type="text"
          maxLength={30}
          placeholder="Team name"
          className="px-10 pt-7 w-full text-5xl font-semibold outline-none text-wrap"
        />
        <FaCheckCircle className="fill-green-500 size-12 cursor-pointer" />
      </div>
      <TeamGrid team={team} removeFromTeam={removeFromTeam} />
      <PokemonGrid pokedexes={pokedexes} addToTeam={addToTeam} />
    </>
  );
};

export default TeamBuilder;
