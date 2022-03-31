import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";

const logWhenClicked = () => console.log("helloo");

const App = () => {
  return (
    <div>
      <Logo prop={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};

export default App;
