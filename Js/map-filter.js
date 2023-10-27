const obtenerPokemons = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();

    // Map
    const mapPoke = data.results.map((poke) => poke);
    console.log(mapPoke);

    // Filter
    const inicial = mapPoke.filter((poke) => poke.name === 'charmander');
    console.log(inicial);

    // Dif Filter - Devuelve un array con todos los resultados menos los filtrados
    const noInicial = mapPoke.filter((poke) => poke.name !== 'charmander');
    console.log(noInicial);
  } catch (error) {

  }
};

obtenerPokemons();


