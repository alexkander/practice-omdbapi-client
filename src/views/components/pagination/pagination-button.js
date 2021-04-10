export default (text, page) => {
  const urlpParams = new URLSearchParams(window.location.search);
  const searchText = urlpParams.get('s') || 1;
  const currentPage = +(urlpParams.get('page') || 1);

  const linkElement = document.createElement('a');
  linkElement.classList.add('pagination-button--wrapper', 'app-link')
  linkElement.innerHTML = text;
  linkElement.setAttribute('href', `?s=${encodeURI(searchText)}&page=${page}`);

  if (currentPage == page){
    linkElement.classList.add('pagination-button--active');
  }

  return linkElement;
}