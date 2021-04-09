import detailView from "./views/detail/detail-view.js";
import listView from "./views/list/list-view.js";

const routeView = () => {
  const urlpParams = new URLSearchParams(window.location.search);
  const viewName = urlpParams.get('view') || 'list';
  if (viewName === 'detail'){
    return detailView();
  }
  return listView();
}

const render = () => {
  const mainContainerElement = document.querySelector('.main-container');
  mainContainerElement.appendChild(routeView());
  document.dispatchEvent(new Event('ready'));
}

window.addEventListener('load', render);