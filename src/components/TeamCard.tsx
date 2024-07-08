import { Team } from "../types";

interface TeamCardProps {
  team: Team;
}

function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="max-w-[32rem] m-5 rounded-xl border-2 border-gray-300 bg-gray-100 cursor-pointer">
      <h1 className="mt-2 text-center font-medium text-2xl text-slate-900">
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
