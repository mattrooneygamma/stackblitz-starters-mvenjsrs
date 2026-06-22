/**
 * Remove duplicate values from array
 * @param {any[]} array
 * @returns {any[]}
 */
const removeDuplicates = (array) => {
  return Array.from(new Set(array));
};

module.exports = {
  removeDuplicates,
};
