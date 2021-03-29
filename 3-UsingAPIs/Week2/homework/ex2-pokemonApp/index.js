'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  // TODO complete this function
  const response = await fetch(url);
  const jsonData = await response.json();
  const results = jsonData.results;
  return results;
}

const select = document.getElementById('select');

async function fetchAndPopulatePokemons(results) {
  // TODO complete this function
  results.forEach((pokemon) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.textContent = pokemon.name;
  });
  if (select.value === pokemon.name) {
    return fetchImage(pokemon.name);
  }
}

function fetchImage(name) {
  // TODO complete this function
  const pokeResponse = `https://pokeapi.co/api/v2/pokemon/${name}`;
  fetch(pokeResponse)
    .then((response) => response.json())
    .then((jsonData) => {
      const pokeImage = document.createElement('img');
      document.body.appendChild(pokeImage);
      const imgSource = jsonData.sprites.front_default;
      pokeImage.src = imgSource;
      pokeImage.style.width = '300px';
    });
}

function main() {
  // TODO complete this function
}
window.addEventListener('load', main);
