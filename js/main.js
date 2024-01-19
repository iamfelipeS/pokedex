
function convertPokemnonToLi(pokemon) {
    return ` 
        <li class="pokemon">
            <span class="number">"${pokemon.id}"</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="details">
                <ol id="pokemonList" class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) =>  {
   const newHtml = pokemons.map(convertPokemnonToLi).join('')
   pokemonList.innerHTML = newHtml
})
    
