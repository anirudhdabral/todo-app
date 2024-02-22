const store = {
    todos: [
        {
            id: "1",
            title: "Complete Task A",
            completed: false
        },
        {
            id: "2",
            title: "Read Book",
            completed: true
        },
        {
            id: "3",
            title: "Write Code",
            completed: true
        },
    ],
};

const storeHandler = {
    get(target, property) {
        return target[property];
    },
    set(target, property, value) {
        target[property] = value;
        if (property == "todos") {
            window.dispatchEvent(new Event("todosChanged"));
        }
        localStorage.setItem("store", JSON.stringify(store));
        return true;
    }
};

const storeProxy = new Proxy(store, storeHandler);

const addTodo = (newTodo) => {
    storeProxy.todos = [...storeProxy.todos, newTodo]
}

const deleteTodo = (id) => {
    storeProxy.todos = storeProxy.todos.filter(todo => todo.id !== id);
}

const toggleCompleted = (id, completed) => {
    storeProxy.todos = storeProxy.todos.map(todo => {
        if(todo.id === id){
            return {...todo, completed: completed}
        }
        return todo;
    });
}

export { addTodo, deleteTodo, toggleCompleted };
export default storeProxy;