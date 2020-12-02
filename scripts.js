const items = [];
const STRIKE_THROUGH = "clicked-item";

const onFormSubmit = (e) => {
    e.preventDefault();

    const errorMessage = document.getElementById("error-message");
    const todoItem = document.getElementById("todo-item");
    const value = todoItem.value;

    if (value) {
        const listItem = document.createElement("li");
        listItem.innerHTML = value;
        listItem.onclick = todoItemOnClick;
        listItem.classList = "todo-list-item";

        const todoList = document.getElementById("todo-list");
        todoList.appendChild(listItem);

        items.push(value);

        const todoListSection = document.getElementById("todo-list-section");
        const emptyListSection = document.getElementById("empty-list-section");

        todoListSection.removeChild(emptyListSection);
        todoItem.value = "";
        errorMessage.hidden = true;
    } else {
        errorMessage.hidden = false;
    }
};

const todoItemOnClick = (e) => {
    const classList = e.target.classList;

    if (classList.contains(STRIKE_THROUGH)) {
        classList.remove(STRIKE_THROUGH);
    } else {
        e.target.classList.add(STRIKE_THROUGH);
    }    
};

window.onload = () => {
    document.getElementById("todo-form").onsubmit = onFormSubmit;
};

