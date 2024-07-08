import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SavedTeamsGrid from "./components/SavedTeamsGrid";
import TeamBuilder from "./components/TeamBuilder";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team-builder/:gameId" element={<TeamBuilder />} />
        <Route path="/saved-teams" element={<SavedTeamsGrid />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
