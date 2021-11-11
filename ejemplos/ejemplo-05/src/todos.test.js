const axios = require('axios');
const { getTodos } = require('./todos');

jest.mock('axios');

describe('getTodos', () => {
  test('returns a todo list as an array', async () => {
    const todos = [
      {
        userId:	4,
        id:	69,
        title:	"Example todo item",
        completed:	false,
      },
      {
        userId:	7,
        id:	137,
        title:	"Another example todo item",
        completed:	true,
      },
    ];
    const response = { data: todos };
    axios.get.mockResolvedValue(response);

    expect(await getTodos()).toEqual(todos);
  });
});
