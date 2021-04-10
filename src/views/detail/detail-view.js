import omdbApi from "../../services/omdb-api.service.js";
import detailMovie from './detail-movie/detail-movie.js';
import pageView from "../components/page-view/page-view.js";

export default () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const imdbId = urlpParams.get('imdbID');

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('detail-view--wrapper', 'app-vertical-spacer');
  
  omdbApi.searchMovieById(imdbId)
    .then((data) => {
      wrapperElement.appendChild(detailMovie(data));
    })
    .catch((err) => {
      alert(`Error getting movie details: ${err.message}`)
    });

  return pageView(wrapperElement);
}