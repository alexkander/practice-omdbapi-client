export default () => {
  const template = `
  <div class="app-container">
    <div class="page-footer--container app-vertical-spacer">
        <a
          class="page-footer-link app-link"
          href="https://github.com/alexkander"
          target="_blank"
        >
          <span>@alexkander</span>
        </a>
        <span>&nbsp;|&nbsp;</span>
        <a
          class="page-footer-link app-link"
          href="https://github.com/alexkander/practice-omdbapi-client"
          target="_blank"
        >
          <i class="page-header--github-icon fab fa-github"></i>
          <span>Github</span>
        </a>
        <span>&nbsp;|&nbsp;</span>
        <a
          class="page-footer-link app-link"
          href="https://www.omdbapi.com"
          target="_blank"
        >
          <span>OMDb api</span>
        </a>
      </div>
    </div>
  `
  const wrapperElement = document.createElement('section');
  wrapperElement.classList.add('page-footer--wrapper')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}