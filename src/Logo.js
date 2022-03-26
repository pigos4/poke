const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png";

const Img = () => <img alt="pokemon" onClick={logWhenClicked} src={url} />;

const logWhenClicked = () => console.log("helloo");

const Logo = () => {
  const appName = "Daniel's Pokedex";
  return (
    <header>
      <h1>{appName}</h1>
      <Img />
    </header>
  );
};

export default Logo;
