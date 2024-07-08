import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import SavedTeamsGrid from "./components/SavedTeamsGrid";

function App() {
  const [hasSavedTeams, setHasSavedTeams] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTeams = localStorage.getItem("teams");
    if (savedTeams) {
      setHasSavedTeams(true);
      navigate("/saved-teams");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      {hasSavedTeams ? <SavedTeamsGrid /> : <GameGrid />}
    </>
  );
}

export default App;
