import { useState } from "react";
import ConfigureCounter from "./components/Counter/ConfigureCounter/ConfigureCounter"
import Counter from "./components/Counter/Counter/Counter"
import Header from "./components/UI/Header/Header"
import { log } from "./log";

function App() {
  log('<App /> rendered');

  const [count, setCount] = useState(0);

  function handleSetCounter(newCount) {
    setCount(newCount);
  }

  return (
    <>
      <Header />

      <main>
        <ConfigureCounter setCounter={handleSetCounter} />
        <Counter initialCount={count} />
      </main>
    </>
  )
}

export default App;
