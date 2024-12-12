import Header from "./components/Header";
import PlacesList from "./components/PlacesList";
import PlacesContextProvider from "./data/PlacesContextProvider";

function App() {

  return (
    <PlacesContextProvider>
      <Header title="PlacePicker" description="Create your personal collection of places you would like to visit or you have visited." />

      <PlacesList title="I'd like to visit ..." />

      <PlacesList title="Available Places" />

    </PlacesContextProvider>
  )
}

export default App
