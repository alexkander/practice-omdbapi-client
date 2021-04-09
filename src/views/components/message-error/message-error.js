export default (error) => {
  const template = error || 'Unknow error';
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('message-error--wrapper')
  wrapperElement.innerHTML = template;
  return wrapperElement;
}