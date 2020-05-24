import React, { useState } from "react";
import "./App.css";
import backgroundImage from "./assets/photo1.jpeg";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState(["react", "Javascript"]);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Inicio" />

      <img src={backgroundImage}></img>

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
