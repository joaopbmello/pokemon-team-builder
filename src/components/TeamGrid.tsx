import { Move, Pokemon } from "../types";
import TeamSlot from "./TeamSlot";

interface TeamGridProps {
  team: (Pokemon | null)[];
  removeFromTeam: (id: number) => void;
  updateMoves: (index: number, moves: Move[]) => void;
}

function TeamGrid({ team, removeFromTeam, updateMoves }: TeamGridProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {team.map((pokemon, index) => (
        <TeamSlot
          key={index}
          pokemon={pokemon}
          removeFromTeam={removeFromTeam}
          updateMoves={(moves) => updateMoves(index, moves)}
        />
      ))}
    </div>
  );
}

export default TeamGrid;
