import { IoIosAddCircle } from "react-icons/io";
import TeamCard from "./TeamCard";

function SavedTeamsGrid() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <IoIosAddCircle className="fill-slate-700 size-24 cursor-pointer" />
      </div>
    </>
  );
}

export default SavedTeamsGrid;
