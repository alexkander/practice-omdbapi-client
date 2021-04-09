export default (dataMovie) => {
  if (dataMovie.Poster === 'N/A') {
    dataMovie.Poster = 'assets/imgs/no-image-available.jpg'
  }
  const template = `
  <div class="list-movies-item--card" title="${dataMovie.Title} (${dataMovie.Year})">
    <div class="app-image-background list-movies-item--poster" style="background-image: url(${dataMovie.Poster})"></div>
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
  return wrapperElement;
}