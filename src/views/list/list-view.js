import omdbApi from "../../services/omdb-api.service.js";
import appHeader from "../components//app-header/app-header.js";
import listMovies from "./list-movies/list-movies.js";
import mainSearch from "./main-search/main-search.js";

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s');

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-view--wrapper');

  const pageElement = document.createElement('section');
  pageElement.classList.add('list-view--page', 'app-container');

  wrapperElement.appendChild(appHeader());
  wrapperElement.appendChild(pageElement);

  if(!searchText) {
    pageElement.appendChild(mainSearch());
  } else {
    omdbApi.searchMovies(searchText)
    .then((data) => {
      pageElement.appendChild(listMovies(data.Search));
    })
    .catch((err) => {
      alert(`Error obteniendo las peliculas: ${err.message}`)
    });
  }

  
  return wrapperElement;
}