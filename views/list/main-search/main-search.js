import inputSearch from '../../components/input-search/input-search.js';

export default () => {
  const template = `
    <h1 class="main-search--title">OMDb API Client</h1>
  `;
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('main-search--wrapper');
  wrapperElement.innerHTML = template;
  wrapperElement.appendChild(inputSearch());

  return wrapperElement;
}