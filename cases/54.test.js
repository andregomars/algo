const { spiralOrder } = require('./54');

test('should return array of spiral matrix', () => {
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

    const demo3 = []
  expect(spiralOrder(demo1)).toEqual([1,2,3,6,9,8,7,4,5]);
  expect(spiralOrder(demo2)).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
  expect(spiralOrder(demo3)).toEqual([]);
});
