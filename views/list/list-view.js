import omdbApi from "../../services/omdb-api.service.js";
import pagination from "../components/pagination/pagination.js";
import listMovies from "./list-movies/list-movies.js";
import mainSearch from "./main-search/main-search.js";
import listSubheader from './list-subheader/list-subheader.js';
import pageView from "../components/page-view/page-view.js";

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s');
  const page = +(urlpParams.get('page') || 1);

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-view--wrapper', 'app-vertical-spacer');

  if(!searchText) {
    wrapperElement.appendChild(mainSearch());
  } else {
    wrapperElement.appendChild(listSubheader());
    omdbApi.searchMovies(searchText, page)
    .then((data) => {
      const evt = new Event('movies.loaded');
      evt.data = data;
      document.dispatchEvent(evt)
      if(data.Response === "True") {
        wrapperElement.appendChild(pagination(data.totalResults));
        wrapperElement.appendChild(listMovies(data.Search));
        wrapperElement.appendChild(pagination(data.totalResults));
      }
    })
    .catch((err) => {
      alert(`Error searching movies: ${err.message}`)
    });
  }

  return pageView(wrapperElement);
}

