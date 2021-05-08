export default () => {
  const template = `
    <input class="input-search--input" placeholder="Search title movie or serie" />
    <i class="input-search--search-icon fas fa-search"></i>
  `;
  const wrapperElement = document.createElement('form');
  wrapperElement.classList.add('input-search--wrapper');
  wrapperElement.innerHTML = template;
  const searchInputElement = wrapperElement.querySelector('.input-search--input');

  const makeSearch =  (evt) => {
    evt.preventDefault();
    const searchText = searchInputElement.value;
    location.href = `?s=${encodeURI(searchText)}`;
    return false;
  }
  
  document.addEventListener('ready', (evt) => {
    searchInputElement.focus();
  });

  wrapperElement.addEventListener('submit', makeSearch)

  return wrapperElement;
}