import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Move, Pokemon } from "../types";
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
  const [teamName, setTeamName] = useState("");
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
      newTeam[emptySlotIndex] = { ...pokemon, moves: [] };
      setTeam(newTeam);
    }
  };

  const removeFromTeam = (id: number) => {
    const newTeam = team.map((slot) => (slot?.id === id ? null : slot));
    setTeam(newTeam);
  };

  const saveTeam = () => {
    const savedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
    const newTeam = { name: teamName, members: team };
    localStorage.setItem("teams", JSON.stringify([...savedTeams, newTeam]));
  };

  const updateMoves = (index: number, moves: Move[]) => {
    const newTeam = [...team];
    if (newTeam[index]) {
      newTeam[index] = { ...newTeam[index]!, moves };
      setTeam(newTeam);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-end items-end mx-10">
        <input
          type="text"
          maxLength={30}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team name"
          className="pt-7 w-full text-5xl font-semibold outline-none text-wrap"
        />
        <FaCheckCircle
          className="fill-green-500 size-12 cursor-pointer"
          onClick={saveTeam}
        />
      </div>
      <TeamGrid
        team={team}
        removeFromTeam={removeFromTeam}
        updateMoves={updateMoves}
      />
      <PokemonGrid pokedexes={pokedexes} addToTeam={addToTeam} />
    </>
  );
};

export default TeamBuilder;
