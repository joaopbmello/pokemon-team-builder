import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedTeams = localStorage.getItem("teams");
    if (savedTeams) {
      navigate("/saved-teams");
    } else {
      navigate("/team-builder");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
