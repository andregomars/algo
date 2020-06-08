/*
200. Number of Islands

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let cnt = 0;
    const rowLen = grid.length
    for (let i = 0; i < rowLen; i++) {
        const colLen = grid[i].length;
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === '1') {
                cnt++;
                sink(grid, i, j, rowLen, colLen);
            }
        }
    }

    return cnt;
};

var getGrid = (grid) => {
    return [...grid].map(row => [...row]);
}

var sink = (grid, i, j, rowLen, colLen) => {
    if (i < 0 || j < 0 || i > rowLen - 1 || j > colLen - 1
        || grid[i][j] === '0') return;

    grid[i][j] = '0';

    sink(grid, i, j + 1, rowLen, colLen);
    sink(grid, i + 1, j, rowLen, colLen);
    sink(grid, i, j - 1, rowLen, colLen);
    sink(grid, i - 1, j, rowLen, colLen);
}

var test = () => {
    const demo1 =
        ['11110',
            '11010',
            '11000',
            '00000'];

    const demo2 =
        ['11000'
        ,'11000'
        ,'00100'
        ,'00011'];

    // console.log(getArrays(demo1))
    console.log(numIslands(getGrid(demo1)));
    console.log(numIslands(getGrid(demo2)));
}

module.exports.test = test;
module.exports.getGrid = getGrid;
module.exports.numIslands = numIslands;