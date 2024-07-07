import { TiDelete } from "react-icons/ti";
import { Pokemon } from "../types";

interface TeamSlotProps {
  pokemon: Pokemon | null;
  removeFromTeam: (id: number) => void;
}

function TeamSlot({ pokemon, removeFromTeam }: TeamSlotProps) {
  const isEmpty = pokemon === null;

  const primaryTypeColor = isEmpty ? "slate-300" : pokemon.types[0];
  const secondaryTypeColor = isEmpty
    ? "slate-300"
    : pokemon.types[1] || pokemon.types[0];

  return (
    <div className="m-5 w-52">
      {isEmpty ? (
        ""
      ) : (
        <div className="absolute">
          <img
            className="w-52"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
          <TiDelete
            className="absolute top-0 right-0 size-7 cursor-pointer fill-slate-400 hover:fill-slate-700"
            onClick={() => !isEmpty && removeFromTeam(pokemon.id)}
          />
        </div>
      )}
      <svg
        className={`-mb-6 fill-${primaryTypeColor}`}
        viewBox="2 2 19.9 9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.9 11c-.5-5.05-4.76-9-9.95-9C6.77 2 2.5 5.95 2 11h5.05a5 5 0 0 1 9.8 0h5.05z" />
      </svg>
      <svg
        className={`fill-${secondaryTypeColor}`}
        viewBox="2 9 19.9 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          transform="scale(.18)"
          x="52.27"
          y="52.27"
          width="28.8"
          height="28.8"
          rx="14.4"
          stroke-width="0"
        />
        <path d="M21.9 13h-5.05a5 5 0 0 1-9.8 0H2c.5 5.05 4.77 9 9.95 9 5.19 0 9.45-3.95 9.95-9z" />
        <path
          d="M11.95 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm1.5-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        />
      </svg>
      <h1 className="text-center font-medium text-xl capitalize text-slate-900 mt-1">
        {isEmpty ? "" : pokemon.name}
      </h1>
    </div>
  );
}

export default TeamSlot;
