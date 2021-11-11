const { getMetrics } = require('./metrics');
const { getTodos } = require('./todos');

jest.mock('./todos');

describe('getMetrics', () => {
  let metrics;

  beforeAll(async () => {
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
      {
        userId:	7,
        id:	140,
        title:	"Yet another example todo item",
        completed:	false,
      },
    ];

    getTodos.mockImplementation(() => todos);
    metrics = await getMetrics();
  });

  test('returns an object that includes the completed property', () => {
    expect(metrics).toHaveProperty('completed');
  });

  test('includes the number of completed todos inside the returned object', () => {
    expect(metrics.completed).toBe(1);
  });
});
