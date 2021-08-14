/*
  removeAllChildrenHtmlElementsEvent function
  => remove all old page link elements event listener before remove the element
*/
const removeAllChildrenHtmlElementsEvent = (parentEl) => {
  if (parentEl.firstChild) {
    const parentElChildrenArray = [...parentEl.children];
    parentElChildrenArray.forEach((child)=>{
      child.removeEventListener('click',pageLinkElementEventHandler);
    });
  }
}

/*
    removeAllChildrenHtmlElements function
*/
const removeAllChildrenHtmlElements = (parentEl) => {
  if (parentEl.firstChild) {
    while (parentEl.firstChild) {
      parentEl.removeChild(parentEl.lastChild);
    }
  }
};

/*
    createSpanHtmlElement function
*/
const createSpanHtmlElement = (elclass, elContent, elDataPage = false) => {
  const newSpanHtmlElement = document.createElement("span");
  newSpanHtmlElement.classList.add(elclass);
  newSpanHtmlElement.textContent = elContent;
  if (elDataPage) {
    newSpanHtmlElement.setAttribute("data-page", elDataPage);
  }
  return newSpanHtmlElement;
};
