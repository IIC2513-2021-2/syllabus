const TodoList = require('./todo');

describe('TodoList', () => {
  describe('#remember', () => {
    const newElement = 'new element';

    describe('when todo list is empty', () => {
      let todoList;

      beforeAll(() => {
        todoList = new TodoList();
        todoList.remember(newElement);
      });

      test('adds a todo item at the end of the list', () => {
        const list = todoList.todoList;
        expect(list[list.length - 1]).toBe(newElement);
      });

      test('increases the size of the list to 1', () => {
        expect(todoList.todoList).toHaveLength(1);
      });

      test('has the last item equal to the first one', () => {
        const list = todoList.todoList;
        expect(list[list.length - 1]).toBe(list[0]);
      });
    });

    describe('when todo list is not empty', () => {
      let todoList;
      let originalSize;

      beforeAll(() => {
        todoList = new TodoList(['first item']);
        originalSize = todoList.todoList.length;
        todoList.remember(newElement);
      });

      test('adds a todo item at the end of the list', () => {
        const list = todoList.todoList;
        expect(list[list.length - 1]).toBe(newElement);
      });

      test('increases the size of the list by 1', () => {
        expect(todoList.todoList).toHaveLength(originalSize + 1);
      });

      test('has the last item different than the first one', () => {
        const list = todoList.todoList;
        expect(list[list.length - 1]).not.toBe(list[0]);
      });
    });
  });

  describe('#prioritize', () => {
    const newElement = 'new element';

    describe('when todo list is empty', () => {
      let todoList;

      beforeAll(() => {
        todoList = new TodoList();
        todoList.prioritize(newElement);
      });

      test('adds a todo item at the beginning of the list', () => {
        const list = todoList.todoList;
        expect(list[0]).toBe(newElement);
      });

      test('increases the size of the list to 1', () => {
        expect(todoList.todoList).toHaveLength(1);
      });

      test('has the first item equal to the last one', () => {
        const list = todoList.todoList;
        expect(list[0]).toBe(list[list.length - 1]);
      });
    });

    describe('when todo list is not empty', () => {
      let todoList;
      let originalSize;

      beforeAll(() => {
        todoList = new TodoList(['one']);
        originalSize = todoList.todoList.length;
        todoList.prioritize(newElement);
      });

      test('adds a todo item at the beginning of the list', () => {
        const list = todoList.todoList;
        expect(list[0]).toBe(newElement);
      });

      test('increases the size of the list by 1', () => {
        expect(todoList.todoList).toHaveLength(originalSize + 1);
      });

      test('has the first item different than the last one', () => {
        const list = todoList.todoList;
        expect(list[0]).not.toBe(list[list.length - 1]);
      });
    });
  });

  describe('#getTask', () => {
    describe('when todo list is empty', () => {
      let task;
      let todoList;
      let originalSize;

      beforeAll(() => {
        todoList = new TodoList();
        originalSize = todoList.todoList.length;
        task = todoList.getTask();
      });

      test('returns undefined', () => {
        expect(task).toBeUndefined;
      });

      test('keeps the list empty', () => {
        expect(todoList.todoList).toHaveLength(originalSize);
      });
    });

    describe('when todo list is not empty', () => {
      const element = 'existing element';
      let task;
      let todoList;
      let originalSize;

      beforeAll(() => {
        todoList = new TodoList([element]);
        originalSize = todoList.todoList.length;
        task = todoList.getTask();
      });

      test('returns the existing element', () => {
        expect(task).toBe(element);
      });

      test('decreases the size of the list by 1', () => {
        expect(todoList.todoList).toHaveLength(originalSize - 1);
      });
    });
  });
});
