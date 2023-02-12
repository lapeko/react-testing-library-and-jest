// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

expect.extend({
  willNotAppearInTheDom: async (findByQuery) => {
    try {
      await findByQuery;
      return {
        pass: false,
        message: () =>
          `Your element(s) which should not appear in the DOM suddenly found there`,
      };
    } catch (e) {
      if (/^found multiple elements/i.test(e.message))
        return {
          pass: false,
          message: () => e.message,
        };
      return {
        pass: true,
      };
    }
  },
});
