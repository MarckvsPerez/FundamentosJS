const obtenerPokemon = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    const arrayNombres = data.results.map((poke) => poke );
    console.log(arrayNombres);
  } catch (error) {
    console.error(error);
  }
};

obtenerPokemon();
