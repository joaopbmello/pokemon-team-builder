import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game } from "../types";

const isMainGame = (gameName: string) => {
  const notMainGame = [
    "colosseum",
    "xd",
    "the-crown-tundra",
    "the-isle-of-armor",
    "the-teal-mask",
    "the-indigo-disk",
  ];
  return !notMainGame.includes(gameName);
};

const formatGameNames = (names: string[]) => {
  if (names.length === 1) return names[0].replace(/-/g, " ");
  const lastTwo = names.slice(-2).map((name) => name.replace(/-/g, " "));
  const rest = names.slice(0, -2).map((name) => name.replace(/-/g, " "));
  return [...rest, lastTwo.join(" & ")].join(", ");
};

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/version-group?limit=27"
      );
      const gamesData = response.data.results;

      const gamesDetails = await Promise.all(
        gamesData.map(async (game: { name: string; url: string }) => {
          const gameDetails = await axios.get(game.url);
          return {
            id: gameDetails.data.id,
            name: gameDetails.data.name,
            pokedexes: gameDetails.data.pokedexes.map(
              (pokedex: any) => pokedex.name
            ),
            versions: gameDetails.data.versions.map(
              (version: any) => version.name
            ),
            generation: gameDetails.data.generation.name,
          };
        })
      );

      const groupedGames = gamesDetails
        .filter((game) => isMainGame(game.name))
        .reduce((acc: Record<string, Game>, game) => {
          const key = `${game.pokedexes.sort().join("-")}-${game.generation}`;
          if (!acc[key]) {
            acc[key] = { ...game, versions: [] };
          }
          acc[key].versions.push(...game.versions);
          return acc;
        }, {});

      const finalGames = Object.values(groupedGames).map((game) => ({
        ...game,
        name: formatGameNames(game.versions),
      }));

      setGames(finalGames);
    };

    fetchGames();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {games.map((game) => (
        <div
          key={game.id}
          className="m-5 w-48 rounded-xl border-2 border-gray-300 bg-gray-100 cursor-pointer"
          onClick={() => navigate(`/team-builder/${game.id}`)}
        >
          <h1 className="text-center font-medium text-lg capitalize text-slate-900 m-1">
            {game.name}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
