const input = document.querySelector('input');
const button = document.querySelector('button');
const img = document.querySelector('#pokemonimg');
const nameofPokemon = document.querySelector('#name');
const type = document.querySelector('#type');
const final = document.querySelector('.final');

final.style.display = 'none';

button.addEventListener('click' , () => {
    const pokemon = input.value.toLowerCase(); 
    pokeApi(pokemon) ; 
    final.style.display = 'block';
    input.value = '';
}) ; 


const pokeApi = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log(data);
    img.src = data.sprites.front_shiny;
    nameofPokemon.innerText = `Name: ${data.name.toUpperCase()}`;
    type.innerText = `Type: ${data.types[0].type.name.toUpperCase()}`;
}