import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Team } from "../types";
import NavBar from "./NavBar";
import TeamCard from "./TeamCard";

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
        <Link to="/team-builder">
          <IoIosAddCircle className="absolute bottom-0 right-0 m-10 fill-slate-700 size-24 cursor-pointer" />
        </Link>
      </div>
    </>
  );
}

export default SavedTeamsGrid;
