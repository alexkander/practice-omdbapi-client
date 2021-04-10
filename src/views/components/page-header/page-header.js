import inputSearch from '../input-search/input-search.js';

export default () => {
  const template = `
    <div class="app-container page-header--container">
      <a class="page-header--app-name app-link" href="/" title="Go to home">
        OMDb API Client
      </a>
      <div class="page-header--search"></div>
    </div>
  `
  // <div>
  //   <a
  //     class="page-header--github-link app-link"
  //     href="https://github.com/alexkander/practice-omdbapi-client"
  //     target="_blank"
  //   >
  //     <i class="page-header--github-icon fab fa-github"></i>
  //     <span>Go github</span>
  //   </a>
  // </div>
  const wrapperElement = document.createElement('section');
  wrapperElement.classList.add('page-header--wrapper')
  wrapperElement.innerHTML = template;

  const searchContainer = wrapperElement.querySelector('.page-header--search');
  searchContainer.appendChild(inputSearch());
  return wrapperElement;
}