const { sum } = require('../src/menuOrdering.ts');

describe('simpleTest', () => {
  it('tests whether Jest is working', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
