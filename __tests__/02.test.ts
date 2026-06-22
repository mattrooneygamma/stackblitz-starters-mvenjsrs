const { removeDuplicates } = require('../02.ts');

describe('removeDuplicates', () => {
  it('should remove duplicates', () => {
    expect(removeDuplicates([1, 1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
});
