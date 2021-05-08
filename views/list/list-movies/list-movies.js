import listMoviesItem from './list-movies-item.js';

export default (arrayMovies) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-movies--wrapper');
  
  arrayMovies.forEach((dataMovie) => {
    wrapperElement.appendChild(listMoviesItem(dataMovie))
  });
  
  return wrapperElement;
}