import React from "react"
import Form from "./components/Form"
import MainDisplay from "./components/MainDisplay"
import Sidebar from "./components/Sidebar"
import StatusEnum from "./model/enums/statusEnum";
import Project from "./components/Project";

function App() {

  const [currentState, setCurrentState] = React.useState(StatusEnum.IDLE);
  const [projects, setProjects] = React.useState([]);
  const [currentProject, setCurrentProject] = React.useState();

  function handleClickAdd() { setCurrentState(StatusEnum.ADDING); }

  function handleClickIdle() { setCurrentState(StatusEnum.IDLE); }

  function handleClickOnProject(projectId) { 
    setCurrentState(StatusEnum.ON_PROJECT); 
    
    setCurrentProject(projects.find(project => project.id === projectId));
  }

  return (
    <main className="flex">
      <Sidebar projects={projects} onClick={handleClickAdd} onProjectClick={handleClickOnProject} />

      {currentState === StatusEnum.IDLE && <MainDisplay onClick={handleClickAdd} />}

      {currentState === StatusEnum.ADDING && <Form setProjects={setProjects} onClick={handleClickIdle} />}

      {currentState === StatusEnum.ON_PROJECT && <Project currentProject={currentProject} setProjects={setProjects} onClickDelete={handleClickIdle}></Project>}
    </main>
  );
}

export default App;
