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
});
