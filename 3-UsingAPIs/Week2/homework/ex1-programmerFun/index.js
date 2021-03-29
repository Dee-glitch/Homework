'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `requestData()` using `fetch()` to make a request to 
   the url passed to it as an argument. The function should return a promise. 
   Make sure that the promise is rejected in case of HTTP or network errors.
2. Notice that the function `main()` calls `requestData()`, passing it the url 
   `https://xkcd.now.sh/?comic=latest`. Try and run the code in the browser and 
   open the browser's console to inspect the data returned from the request.
3. Next, complete the function `renderImage()` to render an image as an `<img>` 
   element appended to the document's body, using the data returned from the API.
4. Complete the function `renderError()` to render any errors as an `<h1>` 
   element appended to the document's body.
5. Refactor the `main()` function to use `async/await`.
6. Test error handling, for instance, by temporarily changing the `.sh` in the 
   url with `.shx`. There is no server at the modified url, therefore this 
   should result in a network (DNS) error.
------------------------------------------------------------------------------*/
function requestData(url) {
  // TODO return a promise using `fetch()`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('data', data);
      return data;
    })
    .catch((error) => {
      console.log('err', error);
    });
}

function renderImage() {
  // TODO render the image to the DOM
  fetch('https://xkcd.now.sh/?comic=latest')
    .then((resp) => resp.json())
    .then((data) => {
      const img = document.createElement('img');
      img.src = data.img;
      document.body.appendChild(img);
      return img;
    });
}

function renderError(error) {
  // TODO render the error to the DOM
  if (error) {
    const h1 = document.createElement('h1');
    h1.textContent = 'something went wrong!';
    document.body.appendChild(h1);
  }
}

// TODO refactor with async/await and try/catch
async function main() {
  try {
    const data = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(data);
  } catch (error) {
    renderError(error);
  }
}

window.addEventListener('load', main);
