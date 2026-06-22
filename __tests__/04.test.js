const { getProperty } = require('../04.js');

describe('getProperty', () => {
  it('should return the specified nested property', () => {
    const object = { foo: { bar: 'baz' } };
    expect(getProperty(object, 'foo.bar')).toEqual('baz');
  });
});
