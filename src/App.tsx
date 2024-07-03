import { useState } from "react";
import "./App.css";
import PokemonGrid from "./components/PokemonGrid";
import TeamGrid from "./components/TeamGrid";
import { Pokemon } from "./types";

function App() {
  const [team, setTeam] = useState<(Pokemon | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

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
      <TeamGrid team={team} removeFromTeam={removeFromTeam} />
      <PokemonGrid addToTeam={addToTeam} />
    </>
  );
}

export default App;
