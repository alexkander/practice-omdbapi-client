import detailView from "./detail/detail-view.js";
import listView from "./list/list-view.js";

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
}

window.onload = render;