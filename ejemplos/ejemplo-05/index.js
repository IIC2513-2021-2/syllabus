const { getMetrics } = require('./src/metrics');
const { getTodos } = require('./src/todos');

getTodos().then(console.log);
getMetrics().then(console.log);
