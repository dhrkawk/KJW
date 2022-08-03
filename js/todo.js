const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function isNotSame(toDo, li) {
    return toDo.id !== parseInt(li.id);
}

function deleteToDo(event) { 
    const li = event.target.parentElement;
   
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newTodo) {
    const mylist = document.createElement("li");
    mylist.id = newTodo.id;
    toDoList.appendChild(mylist);
    const myspan = document.createElement("span");
    myspan.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = " ❌";
    button.addEventListener("click", deleteToDo);
    mylist.appendChild(myspan);
    mylist.appendChild(button);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

const todos = [{}]







