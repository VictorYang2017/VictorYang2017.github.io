/* Data from API */
const dataInDb = 37;
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