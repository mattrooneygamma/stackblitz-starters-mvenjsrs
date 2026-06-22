const { splitIntoChunks } = require('../03.js');

describe('splitIntoChunks', () => {
  it('should split an array into chunks', () => {
    expect(splitIntoChunks([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
