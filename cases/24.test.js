const { swapPairs, arrayToLinked: a2l, linkedToArray: l2a } = require('./24');

test('swap pairs should work', () => {
  expect(l2a(swapPairs(a2l(
    [1,2,3,4] )))).toEqual(
      [2,1,4,3] );
  expect(l2a(swapPairs(a2l(
    [0] )))).toEqual(
      [0] );
  expect(l2a(swapPairs(a2l(
    [1,2] )))).toEqual(
      [2,1] );
  expect(l2a(swapPairs(a2l(
    [1,2,3] )))).toEqual(
      [2,1,3] );
  expect(l2a(swapPairs(a2l(
    [] )))).toEqual(
      [] );
});
