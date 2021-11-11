const { getCurrentDate } = require('./utils');

describe('utils', () => {
  describe('getCurrentDate', () => {
    let originalDateNow;
    const fixedDate = new Date(2021, 10, 1);

    beforeAll(() => {
      originalDateNow = Date.now;
      Date.now = jest.fn(() => fixedDate);
    });

    afterAll(() => {
      Date.now = originalDateNow;
    });

    // Assuming current date is November 1st, 2021
    test('returns the current date', () => {
      expect(getCurrentDate()).toBe(fixedDate);
    });
  });
});
