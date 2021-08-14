class TodoList {
  constructor(itemListClass, dateClass) {
    this.itemListClass = `.${itemListClass}`;
    this.dateClass = `${dateClass}`;
    this.htmlInput = document.querySelector('.middle-container--input-box');
    this.htmlDateH5 = document.querySelector(this.dateClass);
    this.htmlBottomContainer = document.querySelector(this.itemListClass);
    this.addBtn = document.querySelector('.middle-container--add-btn');
    this.htmlTodoName = '';
    this.htmlEditBtn = '';
    this.htmlDelBtn = '';
    this.todoNameDivShow = 'block';
  }

  init() {
    this.showDate();
    this.addLists();
  }

  get userValue() {
    const htmlInputValue = this.htmlInput.value;
    return htmlInputValue;
  }

  createUserList() {
    let newListHtml = '';
    if (!this.userValue) {
      this.htmlInput.style.border = '2px solid #e26259';
      return '';
    } else {
      this.htmlInput.style.border = '2px solid #449d48';
      const listIndivClass = this.userValue.replace(/\s/g, '-').toLowerCase();
      newListHtml = `<div class="bottom-container--todo todo ${listIndivClass}">
                                <div class="todo-name">${this.userValue}</div>
                                <input class="edit-input" type="text" maxlength ="12" >
                                <div class="todo-actions actions">
                                    <div class="edit"><i class="fas fa-edit fa-sm"></i></div>
                                    <div class="del"><i class="fas fa-trash-alt fa-sm"></i></div>
                                </div>
                            </div>`;
      this.htmlBottomContainer.insertAdjacentHTML('afterbegin', newListHtml);
    }
    this.htmlTodoName = document.querySelector('.todo-name');
    this.htmlEditBtn = document.querySelector('.edit');
    this.htmlDelBtn = document.querySelector('.del');
    this.htmlInput.value = '';

    this.htmlEditBtn.addEventListener('click', this.updateList);
    this.htmlTodoName.addEventListener('click', this.crossOut);
    this.htmlDelBtn.addEventListener('click', this.removeList);
  }

  addLists() {
    this.addBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      this.createUserList();
    });
    this.htmlInput.addEventListener('keydown', (evt) => {
      if (evt.which === 13) {
        evt.preventDefault();
        evt.stopPropagation();
        this.createUserList();
      }
    });
  }

  crossOut(evt) {
    const evtTargetLineThrough = evt.target.classList.contains('cross-out');
    if (!evtTargetLineThrough) {
      evt.target.classList.add('cross-out');
    } else {
      evt.target.classList.remove('cross-out');
    }
  }

  updateList(evt) {
    const indivListItem = evt.currentTarget.parentElement.parentElement;
    const todoNameDivHtml = indivListItem.children[0];
    const editInputHtml = indivListItem.children[1];
    if (this.todoNameDivShow !== 'none') {
      todoNameDivHtml.style.display = 'none';
      editInputHtml.style.display = 'block';
      editInputHtml.value = todoNameDivHtml.innerText;
      this.todoNameDivShow = 'none';
    } else {
      const todoNameDivHtmlText = todoNameDivHtml.innerText;
      const editInputHtmlValue = editInputHtml.value;
      if (editInputHtmlValue === todoNameDivHtmlText) {
        console.log('here');
        todoNameDivHtml.style.display = 'block';
        editInputHtml.style.display = 'none';
        editInputHtml.style.border = '2px solid #449d48';
        this.todoNameDivShow = 'block';
        return '';
      } else if(editInputHtmlValue === '') {
        console.log('asdf');
        editInputHtml.style.border = '2px solid #e26259';
        return '';
      }else{
        todoNameDivHtml.style.display = 'block';
        editInputHtml.style.display = 'none';
        todoNameDivHtml.innerText = editInputHtmlValue;
        editInputHtml.style.border = '2px solid #449d48';
        editInputHtml.value = '';
        this.todoNameDivShow = 'block';
      }
    }
  }

  removeList(evt) {
    const clickedItem = evt.currentTarget.parentElement.parentElement;
    console.log(clickedItem);
    clickedItem.remove();
  }

  showDate() {
    const dateLib = new Date();
    const currentYear = dateLib.getFullYear('yyyy');
    const currentMonth = dateLib.getMonth() + 1;
    const currentDate = dateLib.getDate();
    this.htmlDateH5.innerHTML = `${currentDate}/${currentMonth}/${currentYear}`;
  }
}

const todoList = new TodoList('bottom-container', 'h5');
todoList.init();
