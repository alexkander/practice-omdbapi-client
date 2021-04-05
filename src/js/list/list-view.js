import openimdbApi from "../openimdb-api.js";
import listMovies from "./list-movies.js";

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s') || 'exmachina';

  const template = `
    <a href="https://github.com/alexkander/practice-openimdb" class="btn list-view--button-go-github">Go github</a>
  `
  
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-view--wrapper', 'container');
  wrapperElement.innerHTML = template

  openimdbApi.searchMovies(searchText)
  .then((data) => {
    console.log('data', data);
    wrapperElement.appendChild(listMovies(data.Search));
  })
  .catch((err) => {
    alert(`Error obteniendo las peliculas: ${err.message}`)
  });
  
  return wrapperElement;
}