export default (dataMovie) => {
  const template = `
  <div class="card" style="width: 18rem;">
    <img src="${dataMovie.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${dataMovie.Title}</h5>
      <p class="card-text">${dataMovie.Year}</p>
      <p class="card-text">${dataMovie.Type}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-movies-item--wrapper', 'col')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}