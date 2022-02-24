module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) matrix[i].sort((a, b) => b - a);
    else matrix[i].sort((a, b) => a - b);
    result = result.concat(matrix[i]);
  }
  return result;
};
