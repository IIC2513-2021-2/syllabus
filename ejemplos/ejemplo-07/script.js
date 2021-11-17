function createTodoItem(title, completed = false) {
  const newTodoItem = document.createElement('li');

  const completedCheckbox = document.createElement('input');
  completedCheckbox.setAttribute('type', 'checkbox');
  completedCheckbox.addEventListener('click', handleToggle);
  if (completed) completedCheckbox.setAttribute('checked', true);

  const todoTitle = document.createElement('span');
  todoTitle.textContent = title;

  const removeButton = document.createElement('button');
  removeButton.textContent = '🗑';
  removeButton.addEventListener('click', handleRemove);

  newTodoItem.setAttribute('class', 'todo-item');
  if (completed) newTodoItem.classList.toggle('completed');

  newTodoItem.appendChild(completedCheckbox);
  newTodoItem.appendChild(todoTitle);
  newTodoItem.appendChild(removeButton);

  const todoUlElement = document.querySelector('.todo-list ul');
  todoUlElement.appendChild(newTodoItem);
}

function removeTodoItem(todoItemElem) {
  todoItemElem.remove();
}

function handlerFunction() {
  console.log('Clicked button');
}

function handleRemove(event) {
  console.log(event.target);
  const todoItem = event.target.parentNode;
  removeTodoItem(todoItem);
}

function handleToggle(event) {
  const todoItem = event.target.parentNode;
  todoItem.classList.toggle('completed');
}

function handleCreation(event) {
  if (event.code === 'Enter') {
    const addTodoInput = event.target;
    const value = addTodoInput.value;
    if (!value) {
      addTodoInput.classList.add('input-error');
      return;
    }

    createTodoItem(value);
    addTodoInput.value = '';
    addTodoInput.classList.remove('input-error');
  }
}

function handleLoad(event) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const loadTodosButton = event.target;
  const buttonText = loadTodosButton.textContent;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    const { response } = xhr;
    JSON.parse(response)
      .slice(0, 10)
      .map((todoItem) => createTodoItem(todoItem.title, todoItem.completed));
    loadTodosButton.textContent = buttonText;
    loadTodosButton.removeAttribute('disabled');
  };

  loadTodosButton.textContent = 'Cargando...';
  loadTodosButton.setAttribute('disabled', true);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
  // Asociación handler function con propiedad onclick de un elemento
  // const firstTodoItem = document.querySelector('.todo-item:first-child');
  // const firstButton = firstTodoItem.children[2];
  // firstButton.onclick = handlerFunction;

  const removeButtons = document.querySelectorAll('.todo-item button');
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', handlerFunction);
    removeButton.addEventListener('click', handleRemove);
  });

  const completedCheckboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
  completedCheckboxes.forEach((completedCheckbox) => {
    completedCheckbox.addEventListener('click', handleToggle);
  });

  const addTodoInput = document.querySelector('.add-todo');
  addTodoInput.addEventListener('keyup', handleCreation);

  const loadTodosButton = document.querySelector('.load-todos');
  loadTodosButton.addEventListener('click', handleLoad);
});

$(function () {
  console.log('DOM loaded (using jQuery)');

  const addTodoInput = $('.add-todo');
  addTodoInput.after('<span class="input-text"></span>');
  addTodoInput.on('keyup', function () {
    $('.input-text').text(`Texto: ${$(this).val()}`);
  });
});
