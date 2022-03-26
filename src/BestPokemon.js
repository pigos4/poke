const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <>
      <p> My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.forEach((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </>
  );
};

export default BestPokemon;
