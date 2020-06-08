/*
54. Spiral Matrix
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length < 1) return [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const len = matrix.length * matrix[0].length;

    const nums = [];
    while (nums.length < len) {
        for (let j = left; j <= right; j++) {
            nums.push(matrix[top][j]);
        }
        top++;
        if (nums.length >= len) break;

        for (let i = top; i <= bottom; i++) {
            nums.push(matrix[i][right]);
        }
        right--;
        if (nums.length >= len) break;

        for (let j = right; j >= left; j--) {
            nums.push(matrix[bottom][j]);
        }
        bottom--;
        if (nums.length >= len) break;

        for (let i = bottom; i >= top; i--) {
            nums.push(matrix[i][left]);
        }
        left++;
        if (nums.length >= len) break;
    }

    return nums;
};

const test = () => {
    const demo1 =
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

    const demo2 =
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ]

    console.log(spiralOrder(demo1));
    console.log(spiralOrder(demo2));
}

module.exports.test = test;
module.exports.spiralOrder = spiralOrder;