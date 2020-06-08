const { getGrid, numIslands } = require('./200');

test('should find out how many islands', () => {
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

    expect(numIslands(getGrid(demo1))).toBe(1);
    expect(numIslands(getGrid(demo2))).toBe(3);
});