enum PokemonType {
  normal = 1,
  fighting,
  flying,
  poison,
  ground,
  rock,
  bug,
  ghost,
  steel,
  fire,
  water,
  grass,
  electric,
  psychic,
  ice,
  dragon,
  dark,
  fairy,
}

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
}

function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="m-5 w-48 rounded-xl border-2 border-gray-300 bg-gray-100">
      <div className="flex justify-center mt-2">
        <img
          className="size-32"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
        />
      </div>
      <h1 className="text-center font-medium text-lg capitalize text-slate-900 mt-1">
        {props.name}
      </h1>
      <div className="flex mx-1 mb-2 justify-center">
        {props.types.map((type) => (
          <img
            key={type}
            className="w-1/2 p-1"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${
              PokemonType[type as keyof typeof PokemonType]
            }.png`}
            alt={type}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
