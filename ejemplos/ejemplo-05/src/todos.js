const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  return axios
    .get(URL)
    .then((response) => response.data);
};

module.exports = {
  getTodos,
};
