const { getTodos } = require('./todos');

async function getMetrics() {
  const todos = await getTodos();
  return todos.reduce((acc, todo) => {
    return {
      ...acc,
      completed: (acc.completed || 0) + Number(todo.completed),
    };
  }, {});
}

module.exports = {
  getMetrics,
};
