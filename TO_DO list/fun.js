// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Add event listener to button
addTodoBtn.addEventListener("click", function () {
    // Get input value
    const todoText = todoInput.value;

    // Create new list item and button
    const li = document.createElement("li");
    const todoTextSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Add text content to elements
    todoTextSpan.textContent = todoText;
    deleteBtn.textContent = "Delete";

    // Add class to list item
    li.classList.add("todo-item");

    // Add elements to list item
    li.appendChild(todoTextSpan);
    li.appendChild(deleteBtn);

    // Add list item to list
    todoList.appendChild(li);

    // Reset input value
    todoInput.value = "";

    // Add event listener to delete button
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add event listener to list item
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
});
