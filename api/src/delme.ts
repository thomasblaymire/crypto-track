// Includes
let movies = ['The test is here', 'Bannana', 'True'];
const movie = movies.find((movie) => movie.includes('Bannana'));
const movie2 = movies.find((movie) => movie.indexOf('True') === 0);

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Niel Gaiman'],
    rating: 4.5,
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.34,
  },
  {
    title: 'American Goods',
    authors: ['Niel Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
];

const booksGreaterFourPointThree = books.find((book) => book.rating >= 4.3);
const neilBook = books.find((book) => book.authors.includes('Neil Gaiman'));

// Filter
const nums = [34, 35, 67, 54, 109, 102, 32, 9];

nums.filter((nums) => nums % 2 === 1);
