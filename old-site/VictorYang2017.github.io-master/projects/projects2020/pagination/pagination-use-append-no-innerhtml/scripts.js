const render = (start, end, pageClicked) => {
  // Store the previous page number that I clicked(This variable is not used in this script file, just console.log in event listener)
  let previousClickedPage = pageClicked;

  const holderHtml = document.querySelector("#holder");
  const outPutHtml = document.querySelector("#output-page");

  /* 
    Remove all listener before remove element!!   
  */
  removeAllChildrenHtmlElementsEvent(holderHtml);
  removeAllChildrenHtmlElements(holderHtml);
  checkOutPutPageLinkElements(start, end, pageLength, holderHtml);


  const holderHtmlChildren = holderHtml.children;
  checkPageLinkClicked(pageClicked, holderHtmlChildren, outPutHtml);



  for (let j = 0; j < holderHtmlChildren.length; j++) {
    const indivHolderHtmlChildren = holderHtmlChildren[j];

    indivHolderHtmlChildren.addEventListener(
      "click",
      pageLinkElementEventHandler
    );
  }
};

render(0, 5, false);
