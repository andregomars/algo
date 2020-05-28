const { twoSum } = require('./1');

test('should find out the pair of two sum', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  expect(twoSum([2,7,11,15], 13)).toEqual([0,2]);
  expect(twoSum([2,7,11,15], 22)).toEqual([1,3]);
  expect(twoSum([2,7,11,15], 17)).toEqual([0,3]);
  expect(twoSum([2,7,11,15], 3)).toEqual([]);
  expect(twoSum([2,7,11,15], 2)).toEqual([]);
  expect(twoSum([2, 7], 9)).toEqual([0, 1]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum([2], 2)).toEqual([]);
});