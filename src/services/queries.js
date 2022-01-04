import { checkError, client } from './client.js';
export async function getMovies() {
  // return the list of all movies
  const response = await client.from('movies').select('*');
  return checkError(response);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
  const response = await client.from('movies').select(`*, directors(name)`);
  return checkError(response);
}

export async function getDirectorNames() {
  // return the list of the director's names
  const response = await client.from('directors').select('name');
  return checkError(response);
}

export async function getMovieById(id) {
  // return the movie with the given id
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
