
function convertPokemnonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`).join('')
}

function convertPokemnonToLi(pokemon) {
    return ` 
        <li class="pokemon">
            <span class="number">"#${pokemon.order}"</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="details">
                <ol id="pokemonList" class="types">
                   ${convertPokemnonTypesToLi(pokemon.types)}
                </ol>

                 <img src="${pokemon.sprites.front_default}"
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
    
