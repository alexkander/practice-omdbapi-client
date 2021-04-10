import inputSearch from '../input-search/input-search.js';

export default () => {
  const template = `
    <div class="app-container">
      <div class="page-header--container app-vertical-spacer">
        <a class="page-header--app-name app-link" href="./" title="Go to home">
          OMDb API Client
        </a>
        <div class="page-header--search"></div>
      </div>
    </div>
  `
  const wrapperElement = document.createElement('section');
  wrapperElement.classList.add('page-header--wrapper')
  wrapperElement.innerHTML = template;

  const searchContainer = wrapperElement.querySelector('.page-header--search');
  searchContainer.appendChild(inputSearch());
  return wrapperElement;
}