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
  const data = await response.json();
  return data;
}

function fetchAndPopulatePokemons(select, data) {
  // TODO complete this function
  const pokemons = data.results;
  pokemons.forEach((pokemon) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = pokemon.name;
    option.textContent = pokemon.name;
  });
}

async function fetchImage(select) {
  // TODO complete this function
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${select.value}`
  );
  const data = await response.json();
  const img = document.createElement('img');
  img.src = data.sprites.front_default;
  document.body.appendChild(img);
  img.style.width = '200px';

  const reset = () => {
    img.style.display = 'none';
  };
  select.addEventListener('change', reset);
}

async function main() {
  // TODO complete this function
  const div = document.createElement('div');
  document.body.appendChild(div);

  const button = document.createElement('button');
  div.appendChild(button);
  button.setAttribute('type', 'button');
  button.textContent = 'Get pokemon';

  const select = document.createElement('select');
  div.appendChild(select);

  button.addEventListener('click', async () => {
    try {
      const data = await fetchData(
        'https://pokeapi.co/api/v2/pokemon/?limit=151'
      );
      fetchAndPopulatePokemons(select, data);
    } catch (error) {
      console.log(error);
    }
  });

  select.addEventListener('change', () => {
    fetchImage(select);
  });
}
window.addEventListener('load', main);
