import listMoviesItem from './list-movies-item.js';

export default (arrayMovies) => {
  const template = 'list-movies'
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-movies--wrapper', 'row');
  
  arrayMovies.forEach((dataMovie) => {
    wrapperElement.appendChild(listMoviesItem(dataMovie))
  });
  
  return wrapperElement;
}