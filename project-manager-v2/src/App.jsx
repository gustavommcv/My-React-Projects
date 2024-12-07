import Page from "./components/Page"
import Sidebar from "./components/Sidebar"
import ContextProvider from "./context/ContextProvider"

function App() {

  return (
    <ContextProvider>
      <main className="flex">
        <Sidebar />

        <Page />
      </main>
    </ContextProvider>
    
  )
}

export default App
