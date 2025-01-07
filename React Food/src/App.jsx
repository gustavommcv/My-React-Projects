import Header from "./components/Header/Header";
import MealsContainer from "./components/MealsContainer/MealsContainer";
import MealContextProvider from "./data/MealContextProvider";

function App() {
  return (
    <MealContextProvider>
      <Header />

      <MealsContainer />
    </MealContextProvider>
  );
}

export default App;
