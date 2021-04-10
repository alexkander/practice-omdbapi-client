import paginationButton from "./pagination-button.js";

const cantPageButtons = 10;
const pageSize = 10;

export default (totalResults) => {
  const urlpParams = new URLSearchParams(window.location.search);
  const currentPage = +(urlpParams.get('page') || 1);
  const numbersPages = Math.ceil(totalResults/pageSize);

  const firstButtonPage = Math.max(1, currentPage - parseInt(cantPageButtons/2));
  const lastButtonPage = Math.min(numbersPages, firstButtonPage + cantPageButtons-1);

  console.log('numbersPages', firstButtonPage, numbersPages, totalResults/pageSize);

  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('pagination--wrapper');

  if(currentPage>1){
    wrapperElement.appendChild(paginationButton('<<', 1));
    wrapperElement.appendChild(paginationButton('<', currentPage-1));
  }
  for (let pageNumber = firstButtonPage; pageNumber <= lastButtonPage; pageNumber++) {
    wrapperElement.appendChild(paginationButton(`${pageNumber}`, pageNumber));
  }
  if(currentPage<numbersPages){
    wrapperElement.appendChild(paginationButton('>', currentPage+1));
    wrapperElement.appendChild(paginationButton('>>', numbersPages));
  }

  return wrapperElement;
}