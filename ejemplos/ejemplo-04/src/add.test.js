const { add, asyncAdd } = require('./add');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('(Promise) adds 2 + 3 to equal 5', () => {
  return asyncAdd(2, 3).then((result) => {
    expect(result).toBe(5);
  });
});

test('(Promise resolves) adds 2 + 3 to equal 5', () => {
  return expect(asyncAdd(2, 3)).resolves.toBe(5);
});

test('(async/await) adds 2 + 3 to equal 5', async () => {
  const result = await asyncAdd(2, 3);
  expect(result).toBe(5);
});
