import { Team } from "../types";

interface TeamCardProps {
  team: Team;
  onClick: () => void;
}

function TeamCard({ team, onClick }: TeamCardProps) {
  return (
    <div
      className="m-5 max-w-[32rem] cursor-pointer rounded-xl border-2 border-gray-300 bg-gray-100"
      onClick={onClick}
    >
      <h1 className="mt-2 text-center text-2xl font-medium text-slate-900">
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
          ) : null,
        )}
      </div>
    </div>
  );
}

export default TeamCard;
