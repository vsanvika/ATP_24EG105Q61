// Array containing movie details
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
// FILTER METHOD
// Get all Sci-Fi movies
const scifi = movies.filter(element => element.genre === "Sci-Fi")
// Display Sci-Fi movies
console.log(scifi)
// MAP METHOD
// Create formatted movie title with rating
const inception = movies.map(movie => `${movie.title} (${movie.rating})`)
// Display formatted movie list
console.log(inception)
// REDUCE METHOD
// Calculate average movie rating
const averagerating = movies.reduce((acc, movie) => acc + movie.rating,0) / movies.length;
// Display average rating
console.log(averagerating)
// FIND METHOD
// Find movie with title "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
// Display Joker movie details
console.log(jokerMovie);
// FINDINDEX METHOD
// Find index of movie "Avengers"
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
// Display index
console.log(avengersIndex);
