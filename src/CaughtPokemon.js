import React, { useState } from "react";
const CaughtPokemon = () => {
  const [caught, setCaught] = useState(["hhh"]);
  function catchPokemon() {
    setCaught(caught.concat("ssss"));
  }

  const date = new Date().toLocaleDateString();
  return (
    <>
      <button onClick={catchPokemon}>button</button>
      <p>
        Caught {caught.length} Pokemon on{date}
      </p>
      <ul>
        {caught.map((v,i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
