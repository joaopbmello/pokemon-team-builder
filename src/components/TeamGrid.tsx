import { Pokemon } from "../types";
import TeamSlot from "./TeamSlot";

interface TeamGridProps {
  team: (Pokemon | null)[];
  removeFromTeam: (id: number) => void;
}

function TeamGrid({ team, removeFromTeam }: TeamGridProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {team.map((pokemon, index) => (
        <TeamSlot
          key={index}
          pokemon={pokemon}
          removeFromTeam={removeFromTeam}
        />
      ))}
    </div>
  );
}

export default TeamGrid;
