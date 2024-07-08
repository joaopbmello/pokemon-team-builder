function TeamCard() {
  return (
    <div className="max-w-[32rem] m-5 rounded-xl border-2 border-gray-300 bg-gray-100 cursor-pointer">
      <div className="flex flex-wrap justify-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="h-32 p-2"
        />
      </div>
      <h1 className="text-center font-medium text-lg text-slate-900 mb-2">
        Team name
      </h1>
    </div>
  );
}

export default TeamCard;
