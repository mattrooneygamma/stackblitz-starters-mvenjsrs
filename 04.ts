/**
 * Gets a property on object at the given path
 * @param object
 * @param {string} path The path to the property
 * @example
 *    const obj = { a: { b: { c: 'someValue' } } }
 *    getProperty(obj, 'a.b.c')       // 'someValue'
 *    getProperty(obj, 'a.b')         // {c: 'someValue'}
 *    getProperty(obj, 'a.foo.bar')   // undefined
 *    getProperty(obj, 'foo.bar.baz') // undefined
 */
export const getProperty = (object, path) => {
  /* TODO */
};
