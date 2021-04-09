import inputSearch from '../input-search/input-search.js'

export default () => {
  const template = `
    <div><strong class="list-subheader--matches-number">12</strong> matche(s) found</div>
  `;
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-subheader--wrapper')
  wrapperElement.innerHTML = template;

  wrapperElement.appendChild(inputSearch());

  const updateMatches = (evt) => {
    evt.preventDefault();
    const data = evt.data;
    wrapperElement.querySelector('.list-subheader--matches-number').innerHTML = data.totalResults
  }

  document.addEventListener('movies.loaded', updateMatches)

  return wrapperElement;
}