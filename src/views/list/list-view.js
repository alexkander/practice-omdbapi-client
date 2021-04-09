import omdbApi from "../../services/omdb-api.service.js";
import appHeader from "../components/app-header/app-header.js";
import listMovies from "./list-movies/list-movies.js";
import mainSearch from "./main-search/main-search.js";
import listSubheader from './list-subheader/list-subheader.js';

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s');

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-view--wrapper');

  const pageElement = document.createElement('section');
  pageElement.classList.add('app-page-body', 'app-container');

  wrapperElement.appendChild(appHeader());
  wrapperElement.appendChild(pageElement);

  if(!searchText) {
    pageElement.appendChild(mainSearch());
  } else {
    pageElement.appendChild(listSubheader());
    omdbApi.searchMovies(searchText)
    .then((data) => {
      const evt = new Event('movies.loaded');
      evt.data = data;
      document.dispatchEvent(evt)
      if(data.Response === "True") {
        pageElement.appendChild(listMovies(data.Search));
      }
    })
    .catch((err) => {
      alert(`Error searching movies: ${err.message}`)
    });
  }

  
  return wrapperElement;
}

