import Header from "./components/Header/Header"
import Level from "./components/Level/Level"
import LevelsContainer from "./components/LevelsContainer/LevelsContainer"
import UserNameInput from "./components/UserNameInput/UserNameInput"

function App() {
  return (
    <div className="bg-gradient-to-br from-teal-950 to-emerald-950 flex flex-col max-w-5xl m-auto rounded-2xl shadow-2xl items-center mt-8 mb-8">

      <Header title={'The Almost Final Countdown'} description={'Stop the timer once you estimate that time is (almost) up'} />

      <UserNameInput />
      
      <LevelsContainer>
        <Level title="Easy" targetTime={1} />

        <Level title="Not Easy" targetTime={5} />

        <Level title="Getting Tough" targetTime={10} />
        
        <Level title="Pros Only" targetTime={15} />
      </LevelsContainer>

    </div>
  )
}

export default App;
