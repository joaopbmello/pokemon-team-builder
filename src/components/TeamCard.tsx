import { Pokemon } from "../types";

interface TeamCardProps {
  team: {
    name: string;
    members: (Pokemon | null)[];
  };
}

function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="max-w-[32rem] m-5 rounded-xl border-2 border-gray-300 bg-gray-100 cursor-pointer">
      <h1 className="text-center font-medium text-lg text-slate-900">
        {team.name}
      </h1>
      <div className="flex flex-wrap justify-center">
        {team.members.map((member, index) =>
          member ? (
            <img
              key={index}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${member.id}.png`}
              className="h-32 p-2"
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default TeamCard;
