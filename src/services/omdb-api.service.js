const apiUrlBase = 'https://www.omdbapi.com/?apikey=33f2aa56';

const apiGet = (query) => {
  return fetch(`${apiUrlBase}&${query}`)
  .then((response) => response.json())
  .then((data) => {
    console.log('data', data);
    return data;
  });
}

const searchMovies = (searchText, page) =>{
  return apiGet(`s=${searchText}&page=${page}`);
}

const searchMovieById = (imdbId, plot = 'full') =>{
  return apiGet(`i=${imdbId}&plot=${plot}`);
}

export default {
  searchMovies,
  searchMovieById,
};