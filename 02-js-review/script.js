import assert from 'node:assert/strict';
import { error } from 'node:console';

const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}
function getBook(id) {
  return data.find(d => d.id === id);
}

///////////////////
// destructuring //
///////////////////

// const book3 = getBook(3);
// const book = getBook(2);
// // not ideal but is an option
// const author = book.author;
// console.log(author);

// // object destructuring
// const {
//   title,
//   id,
//   reviews: {
//     librarything: { rating },
//   },
//   genres,
// } = book;
// console.log(title, id, rating); // will require the exact name of the property

// // let's take the following array
// console.log(genres);

// const firstGenre = genres[0];
// const secondGenre = genres[1];
// console.log(firstGenre, secondGenre);

// // array destructuring
// const [first, second] = genres;
// console.log(first, second);

// ///////////////////
// // rest / spread //
// ///////////////////

// // rest element must be last element
// const [one, two, ...other] = genres;
// console.log(other);

// // spread operator
// const newGenres = [...genres, 'epic'];
// console.log(newGenres);

// // can be used for copying objects
// console.log(genres === newGenres); // false

// // caveat: will return a shallow copy - nested objects share the same memory reference
// const arr = [1, 2, 3, [4, 5]];
// const shallowCopy = [...arr];
// arr[0] = 0;
// arr[3][0] = 0;
// console.log(shallowCopy);

// // use .structuredClone() to create deep copies for serialization purposes
// const arr2 = ['a', 'b', 'c', ['d', 'e']];
// const deepCopy = structuredClone(arr2);
// arr2[0] = 'q';
// arr2[3][0] = 'z';
// console.log(deepCopy);

// // spread with objects - will also create a shallow copy!
// const updatedBook = {
//   ...book,
//   // adding a new property
//   moviePublicationDate: '2001-12-09',
//   // overwriting an existing property
//   hasMovieAdaptation: true,
// };
// console.log(updatedBook);

// //////////////////////
// // template literal //
// //////////////////////
// const literal = `${title}, is a book with ${rating} rating and a movie adaptation released in ${
//   updatedBook.moviePublicationDate.split('-')[0]
// }.`;
// console.log(literal);

// ///////////////
// // Ternaries //
// ///////////////

// const ternary =
//   updatedBook.moviePublicationDate.split('-')[0] > 2020 ? 'new movie' : 'old movie';
// console.log(ternary);

// const nrIs = 19283 % 2 === 0 ? 'even' : 'odd';
// console.log(nrIs);

// //////////////////////////////////////////////////////////////
// // Differences between arrow functions and regular functions //
// //////////////////////////////////////////////////////////////

// // Function declaration
// function greet(who) {
//   return `Hello ${who}`;
// }
// // Function expression
// const greetExpression = function (who) {
//   return `Hello ${who}`;
// };

// // function declaration and function expression will be referenced as regular functions

// // Arrow function syntax available starting ES2015
// const say = who => `Hello ${who}`;

// ////////////////////
// // 1 - this value //
// ////////////////////

// // Regular function - this value is dynamic and depends on how the function was invoked:

// // Simple invocation - undefined or global object:
// {
//   function myFunc() {
//     // non-strict
//     console.log(this === global);

//     ('use strict');
//     console.log(this === undefined);
//   }
//   myFunc();
// }

// // Method invocation - object who owns the method
// const simpleObj = {
//   method() {
//     console.log('object', this === simpleObj);
//   },
// };
// simpleObj.method();

// // Indirect invocation
// function simpleFunction() {
//   console.log(this);
// }
// const myContext = { value: 'A' };
// simpleFunction.call(myContext);
// simpleFunction.apply(myContext);

// // Constructor invocation
// new simpleFunction();

// // Arrow function - resolves to the execution context from the outer scope

// const testObject = {
//   myMethod(items) {
//     // console.log(this);
//     const callback = () => {
//       console.log(this);
//     };
//     items.forEach(callback);
//   },
// };
// testObject.myMethod([1, 2, 3]);

// // in an arrow function this is always resolved lexically(indirect invocation doesn't change the value of this)

// //////////////////////
// // 2 - constructors //
// //////////////////////

// // Regular functions can easily construct objects

// function Car(color) {
//   this.color = color;
// }
// let honda = new Car('red');
// assert.equal(honda instanceof Car, true);

// // Arrow functions cannot be used as constructors, one of the consequences of this resolved lexically

// const Vehicle = color => {
//   this.color = color;
// };
// assert.throws(
//   () => {
//     new Vehicle('red');
//   },
//   {
//     name: 'TypeError',
//     message: 'Vehicle is not a constructor',
//   }
// );

// //////////////////////////
// // 3 - arguments object //
// //////////////////////////

// // Regular functions have access to hte arguments object
// function argFunc() {
//   console.log(arguments);
// }
// argFunc('a', 'b');

// // Arrow functions - argument object is resolved lexically or can be accessed using the rest parameter feature
// function regularFunction() {
//   const arrowFunc = (...args) => {
//     console.log(args); // using rest parameter
//     console.log(arguments); // lexically resolved
//   };
//   arrowFunc('i', 'j');
// }
// regularFunction('x', 'y');

// /////////////////////////
// // 4 - implicit return //
// /////////////////////////

// // Regular functions have to return explicitly
// function regularFunctionReturn(a, b) {
//   return a + b;
// }
// console.log(regularFunctionReturn(1, 2));

// // Arrow functions - have implicit return
// const sumFunc = (a, b) => a + b;
// console.log(sumFunc(1, 2));

// /////////////////
// // 5 - methods //
// /////////////////

// // Regular functions - when separated(used as callbacks) from the object, the method looses its context
// class Hero {
//   constructor(name) {
//     this.name = name;
//   }
//   logName() {
//     console.log(this.name);
//   }
// }

// const bat = new Hero('batman');
// bat.logName(); // regular method call
// setTimeout(bat.logName, 1000); // used as callback it will loose its context
// // solution
// setTimeout(bat.logName.bind(bat), 2000); // it binds the context to the method

// // Arrow functions - binds this lexically to the outer function

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   logName = () => {
//     console.log(this.name);
//   };
// }

// const doggy = new Dog('doggy');
// setTimeout(doggy.logName, 5000);

// //////////////////////////////////////////
// // Short-circuiting & Logical operators //
// //////////////////////////////////////////
// console.log(true && 'some string');
// console.log(false && 'some string');
// console.log('alex' && 'alex');
// console.log(0 && 'alex');

// //
// console.log('or' || true);
// console.log(false || 'or');
// //
// const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
// console.log(spanishTranslation);

// // mind the falsy values: 0, '', false, NaN, null, undefined
// console.log(book.reviews.librarything.reviewsCount || 'no data'); // will log no data although 0 in this case is valid

// // solution => nullish coalescing => will short-circuit only when the value is null or undefined
// console.log(book.reviews.librarything.reviewsCount ?? 'no data');

// ///////////////////////
// // Optional chaining //
// ///////////////////////
function getTotalReviews(book) {
  const rev1 = book.reviews.goodreads.reviewsCount;
  // using ? in case the value doesn't exist and ?? to return a default value in case of undefined
  const rev2 = book.reviews.librarything?.reviewsCount ?? 0;
  return rev1 + rev2;
}
// console.log(getTotalReviews(book));
// console.log(getTotalReviews(book3));

////////////
// .map() //
////////////
// const books = getBooks();

// const authors = books.map(book => book.author);
// const titles = books.map(book => book.title);
// const essentialData = books.map(book => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount: getTotalReviews(book),
// }));

// console.log(authors);
// console.log(titles);
// console.log(essentialData);

// ///////////////
// // .filter() //
// ///////////////

// const longBooksWithMovie = books.filter(
//   book => book.pages > 500 && book.hasMovieAdaptation
// );
// console.log('500 pages:', longBooksWithMovie);

// const adventureBooks = books
//   .filter(book => book.genres.includes('adventure'))
//   .map(book => book.title);
// console.log('adventure books:', adventureBooks);

// ///////////////
// // .reduce() //
// ///////////////

// const booksPages = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(booksPages);

// //
// const euros = [29.76, 41.85, 46.5];
// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   // if (index === array.length - 1) {
//   //   return total / array.length;
//   // } else {
//   //   return total;
//   // }
//   return index === array.length - 1 ? total / array.length : total;
// });
// console.log(average);

// // !!!
// // will yield an incorrect average because with each iteration is divides the total
// const incorrectAverage = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   return total / array.length;
// }, 0);
// console.log(incorrectAverage);

// // double the amount in the array
// const doubled = euros.reduce((tally, amount) => {
//   tally.push(amount * 2);
//   return tally;
// }, []);
// console.log(doubled);

// // filter
// const above30 = euros.reduce((total, amount) => {
//   if (amount > 30) {
//     total.push(amount); // remember that push returns the new length so we cannot use ternary here
//   }
//   return total;
// }, []);
// console.log(above30);

// // creating a tally
// const fruitBasket = [
//   'banana',
//   'cherry',
//   'orange',
//   'apple',
//   'cherry',
//   'orange',
//   'apple',
//   'banana',
//   'cherry',
//   'orange',
//   'fig',
// ];

// // using short circuiting
// const fruitTally = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1;
//   return tally;
// }, {});
// console.log(fruitTally);

// const classicTally = fruitBasket.reduce((tally, fruit) => {
//   if (!tally[fruit]) {
//     tally[fruit] = 1;
//   } else {
//     tally[fruit] += 1;
//   }
//   return tally;
// }, {});
// console.log(classicTally);

// const ternaryTally = fruitBasket.reduce((tally, fruit) => {
//   tally[fruit] ? (tally[fruit] += 1) : (tally[fruit] = 1);
//   return tally;
// }, {});
// console.log(ternaryTally);

// // flattening
// const dataNr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const concatenatedArr = dataNr.reduce((acc, item) => {
//   return acc.concat(item);
// }, []);
// console.log(concatenatedArr);

// // .sort() -will mutate the original array
// const nrs = [1, 5, 9, 2, 0, 1, 5, 4, 6, 7];
// const sorted = nrs.slice().sort((a, b) => a - b);
// console.log(sorted);

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedByPages);

// // Immutable arrays
// // 1) Add a new book
// const newBook = {
//   id: 6,
//   title: 'Harry Potter and the chamber of secret',
//   author: 'JK Rowling',
// };
// const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

// // 2) Delete a book
// const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
// console.log(booksAfterDelete);

// // 3) Update a book
// const booksAfterUpdate = booksAfterDelete.map(book =>
//   book.id === 134 ? { ...book, pages: 1 } : book
// );
// console.log(booksAfterUpdate);

const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data));

console.log(res); // at the moment of calling the promise is in pending status
console.log('some string');

async function resFunction() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await result.json();
  return data;
}

const todo = await resFunction();
console.log(todo);
console.log('another string');
