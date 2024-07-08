import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Pokemon } from "../types";
import NavBar from "./NavBar";
import TeamCard from "./TeamCard";

interface Team {
  name: string;
  members: (Pokemon | null)[];
}

function SavedTeamsGrid() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const savedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
    setTeams(savedTeams);
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap justify-center items-center">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
        <IoIosAddCircle className="fill-slate-700 size-24 cursor-pointer" />
      </div>
    </>
  );
}

export default SavedTeamsGrid;
