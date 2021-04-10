export default (dataMovie) => {
  const hasPoster = dataMovie.Poster !== 'N/A'
  const template = `
  <div class="detail-movie--container" title="${dataMovie.Title} (${dataMovie.Year})">
    <div class="detail-movie--poster-column">
      <div class="detail-movie--poster-container"></div>
    </div>
    <div class="detail-movie--info-wrapper">
      <div class="detail-movie--info-inner">
        <h5 class="detail-movie--title-wrapper">
          <strong class="detail-movie--title">${dataMovie.Title}</strong>
          <span class="detail-movie--year-duration">(${dataMovie.Year}) - ${dataMovie.Runtime}</span>
        </h5>
        <div class="detail-movie--rating-wrapper">
          <i class="detail-movie--rating-icon fas fa-star"></i>
          <span>${dataMovie.imdbRating}/10</span>
          <small>(${dataMovie.imdbVotes} votes)</small>
        </div>
        <p class="detail-movie--info-item"><small>${dataMovie.Genre}</small></p>
        <hr>
        <p class="detail-movie--info-item"><strong>Actors</strong>: ${dataMovie.Actors}</p>
        <p class="detail-movie--info-item"><strong>Writer</strong>: ${dataMovie.Writer}</p>
        <p class="detail-movie--info-item"><strong>Production</strong>: ${dataMovie.Production}</p>
        <p class="detail-movie--info-item"><strong>Director</strong>: ${dataMovie.Director}</p>
        <p class="detail-movie--info-item"><strong>Country</strong>: ${dataMovie.Country}</p>
        <p class="detail-movie--info-item"><strong>Rated</strong>: ${dataMovie.Rated}</p>
        <p class="detail-movie--info-item"><strong>Language</strong>: ${dataMovie.Language}</p>
        <p class="detail-movie--info-item"><strong>Awards</strong>: ${dataMovie.Awards}</p>
        <p class="detail-movie--info-item"><strong>BoxOffice</strong>: ${dataMovie.BoxOffice}</p>
        <p class="detail-movie--info-item"><strong>Released</strong>: ${dataMovie.Released}</p>
        <p class="detail-movie--info-item"><strong>DVD</strong>: ${dataMovie.DVD}</p>
        <p class="detail-movie--info-item"><strong>Website</strong>: ${dataMovie.Website}</p>
        <p class="detail-movie--info-item"><strong>Metascore</strong>: ${dataMovie.Metascore}</p>
        <hr>
        <p class="detail-movie--info-item"><strong>Plot</strong>: ${dataMovie.Plot}</p>
        <hr>
        <div class="detail-movie--ratings-wrapper">
          <div>
            <div class="detail-movie--ratings-title">Ratings</div>
            ${dataMovie.Ratings.map((rating) =>
              `<div class="detail-movie--ratings-item">
                <span class="detail-movie--ratings-item--source">${rating.Source}</span>
                <strong>${rating.Value}</strong>
              </div>`
            ).join('')}
          </div>
        <div>
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