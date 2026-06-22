/**
 * @param {number[]} array
 * @returns {number|undefined} Largest number, or undefined if array is empty
 */
const getLargestNumber = (array) =>
  array.reduce(
    (max, element) => (!Number(max) || element > max ? element : max),
    undefined
  );

module.exports = {
  getLargestNumber,
};
