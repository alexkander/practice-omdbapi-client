import pageFooter from "../page-footer/page-footer.js";
import pageHeader from "../page-header/page-header.js";

export default (viewBodyElement) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('page-view--wrapper');

  const pageBodyElement = document.createElement('section');
  pageBodyElement.classList.add('page-view--body');
  
  const containerElement = document.createElement('div');
  containerElement.classList.add('page-view--container', 'app-container');
  pageBodyElement.appendChild(containerElement);

  containerElement.appendChild(viewBodyElement);

  wrapperElement.appendChild(pageHeader());
  wrapperElement.appendChild(pageBodyElement);
  wrapperElement.appendChild(pageFooter());

  return wrapperElement;
}