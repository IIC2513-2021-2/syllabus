const { add } = require('./src/add');
const TodoList = require('./src/todo');

console.log('add function')
console.log(`2 + 3 = ${add(2, 3)}`);

console.log('\n*********************\n');

console.log('TodoList class')
const todoList = new TodoList(['hola', 'chao']);

todoList.remember(4);
todoList.prioritize(10);
console.log('\nPrint list (first time)\n');
todoList.show();

todoList.getTask();
console.log('\nPrint list (second time)\n');
todoList.show();
