import store from './store.js';
const render = () => {
    const todos = document.querySelector(".todos");
    const todoElements = store.todos.map(todo => `<li class="todo" data-id=${todo.id}>
        <span class="todo-title ${todo.completed?"completed":""}">${todo.title}</span>
        <div class="toggle-delete">
            <input type="checkbox" name="completed" ${todo.completed?"checked":""} class="todo-checkbox">
            <button class="delete-todo-button">x</button>
        </div>
    </li>`).join("");

    todos.innerHTML=todoElements
}

export default render;