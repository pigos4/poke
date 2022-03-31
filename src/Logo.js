import React from "react";

const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png";

const Logo = (prop) => {
  const appName = "Daniel's Pokedex";
  return (
    <header>
      <h1>{appName}</h1>
      <img alt="pokemon" onClick={prop.prop} src={url} />
    </header>
  );
};

export default Logo;
