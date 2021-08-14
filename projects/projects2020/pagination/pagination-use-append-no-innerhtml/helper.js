const posts = data;
const numOfPosts = posts.length;
const postsPerPage = 10;
const pageLength = Math.ceil(numOfPosts / postsPerPage);


/*
    createPageLinkElements function
    => creating and appending newly created span page link elements
*/
const createPageLinkElements = (
  startNum,
  endNum,
  holderDomElement,
  minusOnePage = false
) => {
  if (minusOnePage) {
    for (let k = startNum - 1; k < endNum; k++) {
      const pageLinkElement = createSpanHtmlElement(
        "page-links",
        posts[k],
        posts[k]
      );
      holderDomElement.appendChild(pageLinkElement);
    }
  } else {
    for (let k = startNum; k < endNum; k++) {
      const pageLinkElement = createSpanHtmlElement(
        "page-links",
        posts[k],
        posts[k]
      );
      holderDomElement.appendChild(pageLinkElement);
    }
  }
};

/*
    checkOutPutPageLinkElements function
    => check what page link elements to output
*/
const checkOutPutPageLinkElements = (
  startNum,
  endNum,
  lengthOfPages,
  holderDomElement
) => {
  if (pageLength < 5) {
    console.log(1);
    createPageLinkElements(1, lengthOfPages, holderDomElement, true);
  } else if (endNum >= pageLength) {
    console.log(2);
    // Taking care of the last end 5 pages(when click, all the LAST 5 pages are in view )
    const lastFivePages = pageLength - 5;
    createPageLinkElements(lastFivePages, lengthOfPages, holderDomElement);
  } else if (startNum < 1) {
    console.log(3);
    createPageLinkElements(0, 5, holderDomElement);
  } else {
    console.log(4);
    createPageLinkElements(startNum, endNum, holderDomElement, true);
  }
};

/*
    checkPageLinkClicked function
    => check and out put which page your are on
*/
const checkPageLinkClicked = (
  pageClicked,
  holderChildrenElement,
  outPutHtml
) => {
  removeAllChildrenHtmlElements(outPutHtml);
  if (pageClicked) {
    for (let m = 0; m < holderChildrenElement.length; m++) {
      holderChildrenElement[m].classList.remove("active");
      const pageLinkAttr = parseInt(
        holderChildrenElement[m].getAttribute("data-page")
      );
      if (pageClicked === pageLinkAttr) {
        holderChildrenElement[m].classList.add("active");
      }
    }
    const outPutSpanEl = createSpanHtmlElement("number", pageClicked);
    outPutHtml.appendChild(outPutSpanEl);
  } else {
    for (let u = 0; u < holderChildrenElement.length; u++) {
      const pageLinkAttr = parseInt(
        holderChildrenElement[u].getAttribute("data-page")
      );
      if (pageLinkAttr === 1) {
        holderChildrenElement[u].classList.add("active");
      }
    }
    const outPutSpanEl = createSpanHtmlElement("number", 1);
    outPutHtml.appendChild(outPutSpanEl);
  }
};


/*
    pageLinkElementEventHandler function
    => Event handler for page link element
*/
const pageLinkElementEventHandler = (evt) => {
  const clickedPage = parseInt(evt.target.dataset.page);
  // This if statement is taking care if I click the current active page

  if (evt.target.classList.contains("active")) {
    console.log(`Clicked page and current active page are the same!`);
    return "";
  } else {
    const newStart = clickedPage - 2;
    const newEnd = clickedPage + 2;
    // console.log(clickedPage);
    //   console.log(newStart, clickedPage, newEnd);
    // console.log(`Previous clicked page number: ${previousClickedPage}`);
    // console.log(`Current clicked page number: ${clickedPage}`);

    render(newStart, newEnd, clickedPage);
  }
};
