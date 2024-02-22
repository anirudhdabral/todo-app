import render from './render.js'
import store from './store.js'
import { addTodo, deleteTodo, toggleCompleted } from './store.js';

window.addEventListener("todosChanged", () => render());

// check if store is present in localstorage

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if (storeFromLocalStorage?.todos.length) {
    store.todos = storeFromLocalStorage.todos
}
else {
    localStorage.setItem("store", JSON.stringify(store));
    render();
}

// adding todo

const from = document.querySelector("#form");
const todoInputTitle = document.querySelector(".todo-title-input")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoTitle = todoInputTitle.value;
    if (todoTitle.length > 0) {
        const newTodo = {
            id: crypto.randomUUID(),
            title: todoTitle,
            completed: false
        }
        addTodo(newTodo);
    }
});

// deleting todo

const todos = document.querySelector(".todos");
todos.addEventListener("click", (e) => {
    const target = e.target
    if (target.classList.contains("delete-todo-button")) {
        const id = target.closest(".todo").dataset.id;
        deleteTodo(id);
    }
});

// updating todo

todos.addEventListener("change", (e) => {
    const target = e.target
    if (target.classList.contains("todo-checkbox")) {
        const id = target.closest(".todo").dataset.id;
        toggleCompleted(id, target.checked);
    }
});