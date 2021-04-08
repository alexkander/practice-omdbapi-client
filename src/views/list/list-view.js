import openimdbApi from "../../services/openimdb-service.js";
import appHeader from "../components//app-header/app-header.js";
import listMovies from "./components/list-movies.js";

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s') || 'machina';

  const template = ``
  
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-view--wrapper');
  wrapperElement.innerHTML = template;

  const pageElement = document.createElement('section');
  pageElement.classList.add('list-view--page', 'app-container');

  wrapperElement.appendChild(appHeader());
  wrapperElement.appendChild(pageElement);

  openimdbApi.searchMovies(searchText)
  .then((data) => {
    pageElement.appendChild(listMovies(data.Search));
  })
  .catch((err) => {
    alert(`Error obteniendo las peliculas: ${err.message}`)
  });
  
  return wrapperElement;
}