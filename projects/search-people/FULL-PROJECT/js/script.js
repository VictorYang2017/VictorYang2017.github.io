const studentListEl = document.querySelector(".student-list");
const linkListEl = document.querySelector(".link-list");
const inputEl = document.querySelector("#search");
const noResultsEl = document.querySelector(".no-results");

const currentPage = 1;
const itemPerPage = 9;

const hideAllStudents = (studentListElChildren) => {
  studentListElChildren.forEach((studentListElChild) => {
    studentListElChild.style.display = "none";
  });
};

const appendStudentsHtmlEl = () => {
  studentListEl.innerHTML = "";
  let studentHtmlEl = "";
  data.forEach((student) => {
    studentHtmlEl += ` <li class="student-item cf">
                           <div class="student-details">
                              <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                              <h3>${student.name.first} ${student.name.last}</h3>
                              <span class="email">${student.email}</span>
                           </div>
                           <div class="joined-details">
                              <span class="date">Joined ${student.registered.date}</span>
                           </div>
                        </li>`;
  });
  studentListEl.innerHTML = studentHtmlEl;
};

const showStudents = (lists, page) => {
  noResultsEl.style.display = "none";
  hideAllStudents([...studentListEl.children]);
  const numOfPages = Math.ceil(lists.length / itemPerPage);
  const startIndex = page * itemPerPage - itemPerPage;
  const endIndex = page * itemPerPage;

  if (page !== numOfPages) {
    for (let i = startIndex; i < endIndex; i++) {
      lists[i].style.display = "block";
    }
  } else {
    for (let i = startIndex; i < lists.length; i++) {
      lists[i].style.display = "block";
    }
  }
};

const addAppendPageLinks = (lists) => {
   // Remove events off button elements that I am about going to remove
  const numOfPages = Math.ceil(lists.length / itemPerPage);
  linkListEl.innerHTML = "";
  let pageHtmlEl = "";
  for (let i = 1; i <= numOfPages; i++) {
    pageHtmlEl += `
     <li>
        <button type="button">${i}</button>
     </li>
     `;
  }
  linkListEl.innerHTML = pageHtmlEl;
  linkListEl.firstElementChild.firstElementChild.classList.add('active');
  [...linkListEl.children].forEach((linkListElChild) => {
    linkListElChild.firstElementChild.addEventListener("click", (e) => {
      [...linkListEl.children].forEach((pageButton) => {
         pageButton.firstElementChild.classList.remove('active');
      });
      const clickedPageNum = Number.parseInt(e.target.textContent);
      e.target.classList.add('active');
      showStudents(lists, clickedPageNum);
    });
  });
};

appendStudentsHtmlEl();
showStudents([...studentListEl.children], 1);
addAppendPageLinks([...studentListEl.children]);

// Search
const searchStudents = (e) => {
  const inputValue = e.target.value.toLowerCase();
  const filteredStudents = [...studentListEl.children].filter(
    (studentListElChild) => {
      const studentName = studentListElChild.firstElementChild.children[1].textContent.toLowerCase();
      if (studentName.includes(inputValue)) {
        return studentListElChild;
      }
    }
  );

  if (filteredStudents.length > 0) {
    showStudents(filteredStudents, 1);
    addAppendPageLinks(filteredStudents);
  } else {
    hideAllStudents([...studentListEl.children]);
    noResultsEl.style.display = "block";
    linkListEl.innerHTML = "";
  }
};

inputEl.addEventListener("keyup", searchStudents);
