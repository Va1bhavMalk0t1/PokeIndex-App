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
}) ; 


const pokeApi = async (pokemon) => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    console.log(data);
    img.src = data.sprites.front_shiny;
    nameofPokemon.innerText = `Name: ${data.name.toUpperCase()}`;
    type.innerText = `Type: ${data.types[0].type.name.toUpperCase()}`;
    final.style.display = 'block';
    input.value = '';
    } catch(e) {
        alert("Please Enter Valid Pokemon Name !!!!");
        console.log(e) ; 
        input.value = '';
    }
}
