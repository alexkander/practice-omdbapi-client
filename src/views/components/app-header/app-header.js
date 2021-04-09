export default () => {
  const template = `
    <div class="app-container app-header--container">
      <a class="app-header--app-name app-link" href="/" title="Go to home">
        OMDb API Client
      </a>
      <div>
        <a
          class="app-header--github-link app-link"
          href="https://github.com/alexkander/practice-omdbapi-client"
          target="_blank"
        >
          <i class="app-header--github-icon fab fa-github"></i>
          <span>Go github</span>
        </a>
      </div>
    </div>
  `
  const wrapperElement = document.createElement('section');
  wrapperElement.classList.add('app-header--wrapper')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}