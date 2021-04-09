export default (dataMovie) => {
  const hasPoster = dataMovie.Poster !== 'N/A'
  const template = `
  <div class="detail-movie--container" title="${dataMovie.Title} (${dataMovie.Year})">
    <div class="detail-movie--poster-column">
      <div class="detail-movie--poster-container"></div>
    </div>
    <div class="detail-movie--info-wrapper">
      <div class="detail-movie--info-inner">
        <h5 class="app-ellipsis">${dataMovie.Title} (${dataMovie.Year})</h5>
        <p> <strong>Type</strong>: ${dataMovie.Type}</p>
        <p> <strong>Actors</strong>: ${dataMovie.Actors}</p>
        <p> <strong>Awards</strong>: ${dataMovie.Awards}</p>
        <p> <strong>BoxOffice</strong>: ${dataMovie.BoxOffice}</p>
        <p> <strong>Country</strong>: ${dataMovie.Country}</p>
        <p> <strong>DVD</strong>: ${dataMovie.DVD}</p>
        <p> <strong>Director</strong>: ${dataMovie.Director}</p>
        <p> <strong>Genre</strong>: ${dataMovie.Genre}</p>
        <p> <strong>Language</strong>: ${dataMovie.Language}</p>
        <p> <strong>Metascore</strong>: ${dataMovie.Metascore}</p>
        <p> <strong>Plot</strong>: ${dataMovie.Plot}</p>
        <p> <strong>Production</strong>: ${dataMovie.Production}</p>
        <p> <strong>Rated</strong>: ${dataMovie.Rated}</p>
        <p> <strong>Ratings</strong>: ${dataMovie.Ratings}</p>
        <p> <strong>Released</strong>: ${dataMovie.Released}</p>
        <p> <strong>Runtime</strong>: ${dataMovie.Runtime}</p>
        <p> <strong>Website</strong>: ${dataMovie.Website}</p>
        <p> <strong>Writer</strong>: ${dataMovie.Writer}</p>
        <p> <strong>imdbRating</strong>: ${dataMovie.imdbRating}</p>
        <p> <strong>imdbVotes</strong>: ${dataMovie.imdbVotes}</p>
      </div>
    </div>
  </div>
  `

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('detail-movie--wrapper')
  wrapperElement.innerHTML = template;

  const imageElement = wrapperElement.querySelector('.detail-movie--poster-container');
  if (hasPoster) {
    imageElement.innerHTML = `<img class="detail-movie--poster-img" src="${dataMovie.Poster}" />`;
  } else {
    imageElement.innerHTML = '<div class="detail-movie--no-poster"><i class="fas fa-image"></i></div>';
  }

  return wrapperElement;
}