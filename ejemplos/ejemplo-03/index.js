const Koa = require('koa');
const koaBody = require('koa-body');
const apiRoutes = require('./src/routes/api')

const app = new Koa();

app.use(koaBody());
app.use(apiRoutes.routes());

app.listen(3000);
