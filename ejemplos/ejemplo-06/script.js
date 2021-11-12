function createTodoItem(title) {
  const newTodoItem = document.createElement('li');
  const todoParagraph = document.createElement('p');
  todoParagraph.textContent = title;

  newTodoItem.appendChild(todoParagraph);
  newTodoItem.setAttribute('class', 'todo-item');

  const todoUlElement = document.querySelector('.todo-list ul');
  todoUlElement.appendChild(newTodoItem);
}

function removeTodoItem(todoItemElem) {
  todoItemElem.remove();

  // const todoUlElement = document.querySelector('.todo-list ul');
  // todoUlElement.removeChild(todoItemElem);

  // todoItemElem.parentNode.removeChild(todoItemElem);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('# Seleccionar elementos');

  const title = document.querySelector('#title');
  console.log('1.', title);

  const todoList = document.querySelector('.todo-list');
  console.log('2.', todoList);

  const todoItems = document.querySelectorAll('.todo-item');
  console.log('3.', todoItems);

  const headerElements = document.getElementsByTagName('header');
  console.log('4.', headerElements);

  console.log('\n# Modificar elementos');

  console.log('Title textContent:', title.textContent);
  title.textContent = `${title.textContent} con modificaciones`;
  console.log('Title textContent:', title.textContent);

  console.log('Title parentNode', title.parentNode);

  console.log('todoList childNodes', todoList.childNodes);
  console.log('todoList children', todoList.children);

  console.log('todoList first child children (todo items)', todoList.children[0].children);

  const [firstTodoItem] = todoItems;
  console.log('First todoItem', firstTodoItem);
  firstTodoItem.children[0].textContent += ', porque este todo item fue modificado';

  createTodoItem('Nuevo nodo creado manipulando DOM');

  const lastTodoItem = document.querySelector('.todo-item:last-child');
  console.log(lastTodoItem);
  // removeTodoItem(lastTodoItem);

  lastTodoItem.style.backgroundColor = 'cornflowerblue';
  lastTodoItem.classList.toggle('completed');
});
