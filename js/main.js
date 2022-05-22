// get ID about login and logout from HTML
const loginContainer = document.querySelector('#login-container');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-input');
const logoutContainer = document.querySelector('#logout-container');
const loginUserName = document.querySelector('#username-title');
const logoutBtn = document.querySelector('#logout-btn');

// get ID about Todos from HTML
const todoContainer = document.querySelector('#todo-container');
const todoForm = document.querySelector('#todo-group form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// shorthand string
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const TODOS_KEY = 'todoItems';

// toggle classList
function handleLoginToggle() {
  loginContainer.classList.toggle(HIDDEN_CLASSNAME);
}

function handleLogoutToggle() {
  logoutContainer.classList.toggle(HIDDEN_CLASSNAME);
}

function handleTodosToggle() {
  todoContainer.classList.toggle(HIDDEN_CLASSNAME);
}

// Function to handle login and logout
function onSubmitLogin(e) {
  e.preventDefault();
  handleLoginToggle();
  const loginInputValue = loginInput.value;
  localStorage.setItem(USERNAME_KEY, loginInputValue);
  showLogoutForm(loginInputValue);
}

function showLogoutForm(username) {
  loginUserName.innerHTML = `Hello ${username}`;
  handleLogoutToggle();
  handleTodosToggle();
}

function onLogout() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

// To-Do Array
let todoItems = [];

// Save To-Do items to localStorage
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoItems));
}

// Remove To-Do item elements
function removeTodos(e) {
  const selectedItem = this.parentElement;
  todoItems = todoItems.filter(
    (todoItem) => todoItem.id !== parseInt(selectedItem.id)
  );
  selectedItem.remove();
  saveTodos();
}

// Create To-Do item elements
function createTodos(todoInputValue) {
  const li = document.createElement('li');
  li.id = todoInputValue.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', function () {
    li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    li.style.color = checkbox.checked ? '#505050' : '#282828';
  });

  const span = document.createElement('span');
  span.innerHTML = todoInputValue.text;

  const deleteBtn = document.createElement('button');
  const url = `url(assets/delete-btn.svg)`;

  deleteBtn.style.backgroundImage = url;
  deleteBtn.addEventListener('click', removeTodos);

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

// submit To-Do value to localStorage
function onSubmitTodos(e) {
  e.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = '';
  const todoItemObj = {
    id: Date.now(),
    text: todoInputValue,
  };
  todoItems.push(todoItemObj);
  createTodos(todoItemObj);
  saveTodos();
}

// get username from localStorage
const getUserName = localStorage.getItem(USERNAME_KEY);
// get To-Do items from localStorage
const getTodoItems = localStorage.getItem(TODOS_KEY);

if (getUserName !== null) {
  showLogoutForm(getUserName);
} else {
  handleLoginToggle();
  loginForm.addEventListener('submit', onSubmitLogin);
}

if (getTodoItems !== null) {
  const parseTodoItems = JSON.parse(getTodoItems);
  todoItems = parseTodoItems;
  parseTodoItems.forEach(createTodos);
}

logoutBtn.addEventListener('click', onLogout);
todoForm.addEventListener('submit', onSubmitTodos);
