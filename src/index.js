// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                result.push(matrix[i][j]);
            }
        }
        if (i % 2 !== 0) {
            for (let k = matrix[i].length - 1; k >= 0; k--) {
                result.push(matrix[i][k]);
            }
        }
    }
    return result;
};
