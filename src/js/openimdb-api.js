const apiUrlBase = 'https://www.omdbapi.com/?apikey=33f2aa56';

const searchMovies = (searchText) =>{
  return fetch(`${apiUrlBase}&s=${searchText}`)
  .then((response) => response.json());
}

export default {
  searchMovies
}