import omdbApi from "../../services/omdb-api.service.js";
import appHeader from "../components/app-header/app-header.js";
import detailMovie from './detail-movie/detail-movie.js'

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const imdbId = urlpParams.get('imdbID');

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('detail-view--wrapper')
  
  const pageElement = document.createElement('section');
  pageElement.classList.add('app-page-body', 'app-container');

  wrapperElement.appendChild(appHeader());
  wrapperElement.appendChild(pageElement);

  omdbApi.searchMovieById(imdbId)
    .then((data) => {
      pageElement.appendChild(detailMovie(data));
    })
    .catch((err) => {
      alert(`Error getting movie details: ${err.message}`)
    });

  return wrapperElement;
}