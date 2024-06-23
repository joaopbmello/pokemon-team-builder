function PokemonCard() {
  return (
    <div className="m-5 w-48 rounded-xl border-2 border-gray-300 bg-gray-100">
      <div className="flex justify-center">
        <img
          className="size-32"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        />
      </div>
      <h1 className="text-center font-medium text-lg text-slate-900 my-1">
        Bulbasaur
      </h1>
      <div className="flex p-1 mb-1">
        <img
          className="w-1/2"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png"
        />
        <img
          className="w-1/2 pl-1"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png"
        />
      </div>
    </div>
  );
}

export default PokemonCard;
