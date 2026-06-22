const { getLargestNumber } = require('../01.ts');

describe('getLargestNumber', () => {
  it('should return largest number number', () => {
    expect(getLargestNumber([5, 2, 10, 0, -7])).toEqual(10);
    expect(getLargestNumber([0, 0, 0])).toEqual(0);
    expect(getLargestNumber([-7, -5, -3])).toEqual(-3);
  });

  it('should return undefined for empty arrays', () => {
    expect(getLargestNumber([])).toBeUndefined();
  });
});
