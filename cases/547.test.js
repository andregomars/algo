const { findCircleNum } = require('./547');

test('should find how many friends circles in a grid', () => {
  const input1 =
   [[1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]];
  const input2 =
   [[1, 1, 0],
    [1, 1, 1],
    [0, 1, 1]];
  const input3 =
   [[1, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]];
  const input4 =
   [[1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,1,1]];

  expect(findCircleNum(input1)).toBe(2);
  expect(findCircleNum(input2)).toBe(1);
  expect(findCircleNum(input3)).toBe(1);
  expect(findCircleNum(input4)).toBe(1);
});