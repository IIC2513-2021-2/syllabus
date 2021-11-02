class TodoList {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  remember(task) {
    this.todoList.push(task);
  }

  prioritize(task) {
    this.todoList.unshift(task);
  };

  getTask() {
    return this.todoList.shift();
  };

  show() {
    this.todoList.forEach((item) => console.log(item));
  };
}

module.exports = TodoList;
