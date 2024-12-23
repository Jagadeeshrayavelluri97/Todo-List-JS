// Select DOM Elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Add Event Listener for Adding Todos
addButton.addEventListener("click", addTodo);

// Add a Todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create Todo Item
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    // Add Text
    const todoSpan = document.createElement("span");
    todoSpan.textContent = todoText;
    todoItem.appendChild(todoSpan);

    // Buttons and Checkbox
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("todo-buttons");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        todoItem.classList.toggle("completed");
    });

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.classList.add("done-button");
    doneButton.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.innerHTML = "&#10006;";
    deleteIcon.addEventListener("click", () => {
        todoItem.remove();
    });

    buttonContainer.appendChild(checkbox);
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteIcon);

    todoItem.appendChild(buttonContainer);

    // Add to List
    todoList.appendChild(todoItem);

    // Clear Input
    todoInput.value = "";
}
