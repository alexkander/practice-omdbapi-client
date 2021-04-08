export default () => {
  const template = 'detail-view'
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('detail-view--wrapper')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}