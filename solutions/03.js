/**
 * Split array into smaller arrays of chunkSize
 * @param {any[]} array
 * @param {number} chunkSize
 * @returns {any[][]} array of arrays of length chunkSize
 * @example
 *    const myArray = [1,2,3,4,5]
 *    splitIntoChunks(myArray, 2) // [ [1,2], [3,4], [5] ]
 */
const splitIntoChunks = (array, chunkSize) => {
  return array.reduce((chunked, element) => {
    if (chunked.length == 0 || chunked[chunked.length - 1].length == chunkSize)
      chunked.push([]);
    chunked[chunked.length - 1].push(element);
    return chunked;
  }, []);
};

module.exports = {
  splitIntoChunks,
};
