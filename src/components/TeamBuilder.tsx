import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Move, Pokemon, Team } from "../types";
import NavBar from "./NavBar";
import PokemonGrid from "./PokemonGrid";
import TeamGrid from "./TeamGrid";

const TeamBuilder = () => {
  const { gameId, teamId } = useParams();
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

  useEffect(() => {
    if (teamId) {
      const savedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
      const teamToEdit = savedTeams.find((t: Team) => t.id === teamId);
      if (teamToEdit) {
        setTeam(teamToEdit.members);
        setTeamName(teamToEdit.name);
        setPokedexes(teamToEdit.pokedexes);
      }
    }
  }, [teamId]);

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
    const newTeam = {
      id: teamId || Date.now().toString(),
      name: teamName,
      members: team,
      gameId,
      pokedexes,
    };
    if (teamId) {
      const updatedTeams = savedTeams.map((t: Team) =>
        t.id === teamId ? newTeam : t
      );
      localStorage.setItem("teams", JSON.stringify(updatedTeams));
    } else {
      localStorage.setItem("teams", JSON.stringify([...savedTeams, newTeam]));
    }
    alert("Team saved successfully!");
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
