// Eindopdracht Pascal Pater
// Javascript Async/API - ToDo List


// get needed elements
const todoItem = document.querySelector("#todo-item");
const addButton = document.querySelector("#add-todo");
const todoList = document.querySelector(".todo-list");

// create img element with attributes
const createImgElement = () => {
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "img/delete.svg";
  deleteIcon.alt = "Delete todo item";
  deleteIcon.classList.add("icon-delete");

  // change img on mouseover/mouseout
  deleteIcon.addEventListener("mouseover", () => {
    deleteIcon.src = "img/delete-hover.svg";
  });
  deleteIcon.addEventListener("mouseout", () => {
    deleteIcon.src = "img/delete.svg";
  });
  return deleteIcon;
};

// create list items with todo item, checkbox
// hint text and delete icon
const createListItem = (items) => {
  items.forEach((item) => {
    // get object values
    const description = item.description;
    const done = item.done;
    const id = item._id;

    // create li element with id of todo-item
    const todoItem = document.createElement("li");
    todoItem.id = id;
    todoItem.classList.add("todo-list__item");

    // create span element with description of todo-item
    const todoItemText = document.createElement("span");
    todoItemText.innerHTML = description;
    todoItemText.classList.add("todo-list__description");
    todoItemText.contentEditable = true;

    // create span element with hint text that shows on hover of todo text
    const hintText = document.createElement("span");
    hintText.textContent = "Click text to edit, enter to save changes";
    hintText.classList.add("todo-list__hint");

    // create delete icon image
    const deleteIcon = createImgElement();

    // create checkbox to mark a todo as done
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("todo-list__check");

    // check if todo item has status done
    // cross out todo item and set checkbox as checked
    if (done === true) {
      todoItemText.classList.add("todo-list__item--done");
      checkBox.checked = true;
    }

    // append all created elements
    todoItem.appendChild(checkBox);
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(hintText);
    todoItem.appendChild(deleteIcon);
    todoList.appendChild(todoItem);
  });
};

// use data from api
// use the correct key-value and show within the html element
const showTodo = async () => {
  const data = await getData();
  createListItem(data);
};

const newTodo = async (event) => {
  // prevent default behaviour of <form> element
  event.preventDefault();
  // prevent adding empty todo items
  if (todoItem.value !== "") {
    const todo = { description: todoItem.value, done: false };
    await postData(todo);

    // clear the input field
    todoItem.value = "";
  }
};

// when users clicks delete icon, remove item from database
// use event delegation, because we can not select the delete icon directly (because the list changes everytime)
// instead use eventlistener on the entire list en find out which of the elements in the list is clicked through bubbled events (https://davidwalsh.name/event-delegate)
// catch the event
const deleteTodo = async (event) => {
  // get the clicked target with event.target
  // and check if the item clicked was indeed the delete icon
  if (event.target && event.target.classList.contains("icon-delete")) {

    // get the id of the parent of the delete icon clicked (which is the li element which on its turn holds the unique id of the todo item)
    const id = event.target.parentNode.id;

    // call the deleteData function with the id of the element to be deleted
    await deleteData(id);
  }
};

// when users updates a todo-item, update item in database
// use event delegation to see which checkbox is checked
// catch the event
const updateDoneTodo = async (event) => {
  // get the clicked target with event.target
  // and check if the item clicked was indeed the checkbox
  if (event.target && event.target.classList.contains("todo-list__check")) {
    
    // get the id of the parent of the checkbox clicked
    const id = event.target.parentNode.id;

    // see if the checkbox is checked
    if (event.target.checked) {

      // set done status to true
      await updateData(id, { done: true });

      // see if the checkbox is unchecked
    } else if (!event.target.checked) {

      // set done status to false
      await updateData(id, { done: false });
    }
  }
};

// when user updates text of todo item, send updated text to database
// use event delegation to see which todo text is clicked
// catch the event
const updateTextTodo = async (event) => {
  // get the clicked target with event.target
  // and check if the item clicked was indeed the text of todo
  if (event.target && event.target.classList.contains("todo-list__description")) {
    // get the id of the parent of the todo text clicked
    const id = event.target.parentNode.id;

    // when user hits Enter,
    // the updated todo item text is stored in the database
    event.target.addEventListener("keydown", async (event) => {
      if (event.key == "Enter") {
        // prevent line breaks appearing in todo text
        // use enter pure for sending edited text to database
        event.preventDefault();

        // get the updated text of the todo item
        const content = event.target.textContent;

        // set description to updated text
        await updateData(id, { description: content });
      }
    });
  }
};


// Event listeners

// check if add button is clicked to add new todo
addButton.addEventListener("click", newTodo);

// listen for Enter in input new todo field
// send value to newTodo function
todoItem.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    newTodo();
  }
});

// check if delete icon in the todoList is clicked
todoList.addEventListener("click", deleteTodo);

// check if checkbox in the todoList is clicked
todoList.addEventListener("change", updateDoneTodo);

// check if text of todo item is clicked
todoList.addEventListener("click", updateTextTodo);


// Function calls

showTodo();
