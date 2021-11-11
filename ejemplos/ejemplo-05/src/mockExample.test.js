test('Mock example', () => {
  const myFn = jest.fn();

  const myImplementedFn = jest.fn(() => 'return value');

  myFn('one parameter');
  myFn();
  myImplementedFn();

  console.log(myFn.mock.calls);
  console.log(myImplementedFn.mock.results);

  expect(myImplementedFn).toHaveBeenCalled();
});
