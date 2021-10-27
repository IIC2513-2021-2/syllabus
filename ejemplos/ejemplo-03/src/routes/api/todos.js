const KoaRouter = require('koa-router');

const router = new KoaRouter();

let todosData = [
  {
    id: 1,
    title: 'First todo item',
    completed: false,
  },
];

router.param('id', async (id, ctx, next) => {
  ctx.state.todo = todosData.find((todo) => todo.id === Number(id));
  if (!ctx.state.todo) {
    return ctx.throw(404, `Could not find todo item with id ${id}`);
  }
  return next();
});

router.get('api.todos.list', '/', (ctx) => {
  ctx.body = todosData;
});

router.get('api.todos.show', '/:id', (ctx) => {
  const { todo } = ctx.state;
  ctx.body = todo;
});

router.post('api.todos.create', '/', async (ctx) => {
  const { title } = ctx.request.body;

  if (!title) ctx.throw(422, 'Title can\'t be blank');

  const newTodo = {
    id: (todosData.length ? todosData[todosData.length - 1].id : 0) + 1,
    title,
    completed: false,
  };
  todosData.push(newTodo);

  ctx.status = 201;
  ctx.body = newTodo;
});

router.patch('api.todos.update', '/:id', async (ctx) => {
  const { title, completed } = ctx.request.body;
  const { todo } = ctx.state;

  const requestBodyKeys = Object.keys(ctx.request.body);
  if (requestBodyKeys.includes('title') && !title) ctx.throw(422, 'Title can\'t be blank');
  if (requestBodyKeys.includes('completed') && completed !== true && completed !== false) {
    ctx.throw(422, 'Completed must be either true or false');
  }

  if (requestBodyKeys.includes('title')) todo.title = title;
  if (requestBodyKeys.includes('completed')) todo.completed = completed;

  ctx.body = todo;
});

router.delete('api.todos.delete', '/:id', (ctx) => {
  const { todo } = ctx.state;
  todosData = todosData.filter((todoItem) => todoItem.id !== todo.id);
  ctx.status = 204;
});

module.exports = router;
