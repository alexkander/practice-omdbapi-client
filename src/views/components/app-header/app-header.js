export default () => {
  const template = `
    <div class="app-container app-header--container">
      <a class="app-header--app-name app-link" href="/" title="Go to home">
        OMDb API Client
      </a>
      <div>
        <a
          class="app-link"
          href="https://github.com/alexkander/practice-omdbapi-client"
          target="_blank"
        >Go github</a>
      </div>
    </div>
  `
  const wrapperElement = document.createElement('section');
  wrapperElement.classList.add('app-header--wrapper')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}