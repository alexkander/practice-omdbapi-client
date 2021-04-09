import inputSearch from '../input-search/input-search.js';
import messageError from "../../components/message-error/message-error.js";

export default () => {
  const template = `
    <div class="list-subheader--message"></div>
  `;
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('list-subheader--wrapper')
  wrapperElement.innerHTML = template;

  const messageElement = wrapperElement.querySelector('.list-subheader--message');

  wrapperElement.appendChild(inputSearch());

  const updateMatches = (evt) => {
    evt.preventDefault();
    const data = evt.data;
    if(data.Response === "False") {
      messageElement.innerHTML = '';
      messageElement.appendChild(messageError(data.Error));
    } else {
      messageElement.innerHTML = `<strong class="list-subheader--matches-number">${data.totalResults}</strong> matche(s) found`;
    }
  }

  document.addEventListener('movies.loaded', updateMatches)

  return wrapperElement;
}