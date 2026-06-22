/**
 * @param {number[]} array
 * @returns {number|undefined} Largest number, or undefined if array is empty
 */
export const getLargestNumber = (array) => {
  if (!array.length) return undefined;
  return Math.max(...array);
};
