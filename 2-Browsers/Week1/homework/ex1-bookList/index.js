//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

function createBookList(books) {
  // your code goes in here, return the ul element
  const list = document.createElement('ul');
  document.body.appendChild(list);

  for (const book of books) {
    const li = document.createElement('li');
    list.appendChild(li).style.fontSize = '20px';

    const paragraph = document.createElement('p');
    paragraph.innerText = `${book.title} by "${book.author}"`;
    li.appendChild(paragraph);

    const img = document.createElement('img');
    if (book.title === 'The Design of Everyday Things') {
      img.src = './assets/the_design_of_everyday_things.jpg';
    } else if (book.title === 'The Most Human Human') {
      img.src = './assets/the_most_human_human.jpg';
    } else if (book.title === 'The Pragmatic Programmer') {
      img.src = './assets/the_pragmatic_programmer.jpg';
    }

    li.insertBefore(img, paragraph).style.width = '150px';
    Object.assign(li.style, {
      display: 'flex',
      alignItems: 'center',
      width: '25%',
      listStyle: 'none',
      padding: '20px',
      margin: '20px',
    });

    if (book.alreadyRead === false) {
      li.style.backgroundColor = 'red';
    } else {
      li.style.backgroundColor = 'green';
    }
  }
}

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

const ulElement = createBookList(myBooks);

// document.querySelector('#bookList').appendChild(ulElement);
