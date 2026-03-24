const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const scifi=movies.filter(element=>element.genre==="Sci-Fi")
console.log(scifi)

const inception=movies.map(movie=>`${movie.title} (${movie.rating})`)
console.log(inception)

const  averagerating=movies.reduce((acc,movie) => acc + movie.rating,0) / movies.length;
console.log(averagerating)

const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);