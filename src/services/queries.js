import { checkError, client } from './client.js';

export async function getMovies() {
  const response = await client.from('movies').select('*');
  return checkError(response);
}

export async function getMoviesWithDirector() {
  const response = await client.from('movies').select(`*, directors(name)`);
  return checkError(response);
}

export async function getDirectorNames() {
  const response = await client.from('directors').select('name');
  return checkError(response);
}

export async function getMovieById(id) {
  const response = await client.from('movies').select('*').match({ id }).single();
  return checkError(response);
}

export async function getMovieByTitle(title) {
  const response = await client.from('movies').select('*').match({ title }).single();
  return checkError(response);
}

export async function getOldestMovie() {
  // const response = await client.from('movies').select('*').gt('year', 0).limit(1).single();
  const response = await client
    .from('movies')
    .select('*')
    .order('year', { ascending: true })
    .limit(1)
    .single();
  return checkError(response);
}

export async function getMoviesAfter(year) {
  const response = await client.from('movies').select('*').gt('year', year);
  return checkError(response);
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
