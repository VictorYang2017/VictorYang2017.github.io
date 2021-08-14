/* Data from API */
const dataInDb = 21;
const data = [];
for (let i = 1; i <= dataInDb; i++) {
  data.push(i);
}
/* Data from API */

/* Quick try for out putting posts per page (not sure if it will work, haven't test yet) */
// const currentPage = 1;
// const previousPage = currentPage - 1;

// const postsPerPage = 10;
// const startPost = (previousPage * postsPerPage);
// const endPosts = currentPage * postsPerPage;

// for(let v = startPost; v < endPosts; v++){
//   console.log(`${v}-${data[v]}`);
// }

const posts = data;
const numOfPosts = posts.length;
const postsPerPage = 10;
const pageLength = Math.ceil(numOfPosts / postsPerPage);
// console.log(pageLength);

const createPageLinkElements = (startNum, endNum, holderDomElement) => {
  let pageLinkElements = '';
  if (!holderDomElement) {
    for (let k = startNum - 1; k < endNum; k++) {
      pageLinkElements += `<span class="page-links" data-page="${posts[k]}">${posts[k]}</span>`;
    }
  } else {
    holderDomElement.innerHTML = '';
    for (let k = startNum; k < endNum; k++) {
      pageLinkElements += `<span class="page-links" data-page="${posts[k]}">${posts[k]}</span>`;
    }
  }
  return pageLinkElements;
};

const checkPageLinkClicked = (
  pageClicked,
  holderChildrenElement,
  outPutHtml
) => {
  if (pageClicked) {
    for (let m = 0; m < holderChildrenElement.length; m++) {
      holderChildrenElement[m].classList.remove('active');
      const pageLinkAttr = parseInt(
        holderChildrenElement[m].getAttribute('data-page')
      );
      if (pageClicked === pageLinkAttr) {
        // console.log(holderChildrenElement[m]);
        holderChildrenElement[m].classList.add('active');
      }
    }
    outPutHtml.innerHTML = `<span class="number">${pageClicked}</span>`;
  } else {
    for (let u = 0; u < holderChildrenElement.length; u++) {
      const pageLinkAttr = parseInt(
        holderChildrenElement[u].getAttribute('data-page')
      );
      if (pageLinkAttr === 1) {
        holderChildrenElement[u].classList.add('active');
      }
    }
    outPutHtml.innerHTML = `<span class="number">1</span>`;
  }
  // console.log(pageClicked);
};

const render = (start, end, pageClicked) => {
  // console.log(clicked);
  // Store the previous page number that I clicked(This variable is not used in this script file, just console.log in event listener)
  let previousClickedPage = pageClicked;

  const holderHtml = document.querySelector('#holder');
  const outPutHtml = document.querySelector('#output-page');
  let pageLinkElements = '';
  //   if (end >= pageLength) {
  //       console.log(1);
  //     const lastFivePages = pageLength - 5;
  //     pageLinkElements += createPageLinkElements(
  //       lastFivePages,
  //       pageLength,
  //       holderHtml
  //     );
  //   } else if (start < 1) {
  //     pageLinkElements += createPageLinkElements(0, 5, holderHtml);
  //   } else {
  //     pageLinkElements += createPageLinkElements(start, end, false);
  //   }

  // TRY TO SOLVE IF PAGE UNDER 3
  if (pageLength < 5) {
    // console.log(1)
    // Taking care of if the pages are less than 5 pages
    pageLinkElements += createPageLinkElements(1, pageLength, false);
  } else if (end >= pageLength) {
    // console.log(2);
    // Taking care of the last end 5 pages(when click, all the LAST 5 pages are in view )
    const lastFivePages = pageLength - 5;
    pageLinkElements += createPageLinkElements(
      lastFivePages,
      pageLength,
      holderHtml
    );
  } else if (start < 1) {
    // console.log(3);
    // Taking care of the first 5 pages(when click, all the FIRST 5 pages are in view )
    pageLinkElements += createPageLinkElements(0, 5, holderHtml);
  } else {
    // console.log(4);
    // This is the normal output pages
    pageLinkElements += createPageLinkElements(start, end, false);
  }

  holderHtml.innerHTML = pageLinkElements;

  const holderHtmlChildren = holderHtml.children;
  checkPageLinkClicked(pageClicked, holderHtmlChildren, outPutHtml);

  // console.log(holderHtmlChildren.length);
  for (let j = 0; j < holderHtmlChildren.length; j++) {
    const indivHolderHtmlChildren = holderHtmlChildren[j];
    indivHolderHtmlChildren.addEventListener('click', (e) => {
      const clickedPage = parseInt(e.target.dataset.page);
      // This if statement is taking care if I click the current active page

      if (e.target.classList.contains('active')) {
        console.log(`Clicked page and current active page are the same!`);
        return '';
      } else {
        const newStart = clickedPage - 2;
        const newEnd = clickedPage + 2;
        // console.log(clickedPage);
        //   console.log(newStart, clickedPage, newEnd);
        console.log(`Previous clicked page number: ${previousClickedPage}`);
        console.log(`Current clicked page number: ${clickedPage}`);

        render(newStart, newEnd, clickedPage);
      }
    });
  }
};

render(0, 5, false);

// var pageLen = 20;
// var curPage = 2;
// var item = [];
// for(var i = 1; i<=pageLen;i++){
//    item.push(i);
// }

// function isPageInRange( curPage, index, maxPages, pageBefore, pageAfter ) {
//   if (index <= 1) {
//     // first 2 pages
//     return true;
//   }
//   if (index >= maxPages - 2) {
//     // last 2 pages
//     return true;
//   }
//   if (index >= curPage - pageBefore && index <= curPage + pageAfter) {
//     return true;
//   }
// }

// function render( curPage, item, first ) {
//   var html = '', separatorAdded = false;
//   for(var i in item){
//     if ( isPageInRange( curPage, i, pageLen, 2, 2 ) ) {
//       html += '<li data-page="' + i + '">' + item[i] + '</li>';
//       // as we added a page, we reset the separatorAdded
//       separatorAdded = false;
//     } else {
//       if (!separatorAdded) {
//         // only add a separator when it wasn't added before
//         html += '<li class="separator" />';
//         separatorAdded = true;
//       }
//     }
//   }

//   var holder = document.querySelector('#holder');
//   holder.innerHTML = html;

//   document.querySelector('#holder>li[data-page="' + curPage + '"]').classList.add('active');

//   if ( first ) {
//     holder.addEventListener('click', function(e) {
//       if (!e.target.getAttribute('data-page')) {
//         // no relevant item clicked (you could however offer expand here )
//         return;
//       }
//       curPage = parseInt( e.target.getAttribute('data-page') );
//       render( curPage, item );
//     });
//   }
// }

// render( 2, item, true );
