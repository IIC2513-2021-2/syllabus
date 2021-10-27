const KoaRouter = require('koa-router');
const todos = require('./todos');

const router = new KoaRouter({ prefix: '/api' });

router.get('/', async (ctx) => {
  ctx.body = { message: 'TodoList API' }
});

router.use('/todos', todos.routes());

module.exports = router;
