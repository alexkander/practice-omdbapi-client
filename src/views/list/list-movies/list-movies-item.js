export default (dataMovie) => {
  const hasPoster = dataMovie.Poster !== 'N/A'
  const template = `
  <div class="list-movies-item--card" title="${dataMovie.Title} (${dataMovie.Year})">
    <div class="app-image-background list-movies-item--poster"></div>
    <div class="list-movies-item--info">
      <div class="list-movies-item--info-line">
        <h5 class="list-movies-item--info-title app-ellipsis">${dataMovie.Title}</h5>
        <p class="list-movies-item--info-year">${dataMovie.Year}</p>
      </div>
      <p class="list-movies-item--info-type">${dataMovie.Type}</p>
    </div>
  </div>
  `

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-movies-item--wrapper')
  wrapperElement.innerHTML = template;

  const imageElement = wrapperElement.querySelector('.app-image-background');
  if (hasPoster) {
    imageElement.style.backgroundImage = `url(${dataMovie.Poster})`
  } else {
    imageElement.innerHTML = '<div class="list-movies-item--no-poster"><i class="fas fa-image"></i></div>';
  }

  return wrapperElement;
}