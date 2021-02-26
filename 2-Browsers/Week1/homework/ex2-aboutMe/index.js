'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.querySelector('body').style.fontFamily = 'Arial, sans-serif';

document.querySelector('#nickname').innerText = 'Deedee';
document.querySelector('#fav-food').innerText = 'Sushi';
document.querySelector('#hometown').innerText = 'Mengo';

const list = document.querySelectorAll('li');
for (const item of list) {
  item.className = 'list-item';
}
