/*
78. Subsets

Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

const powerset = ([head, ...tail]) =>
  (
    head == null ? [[]] :
      powerset(tail).flatMap(subsets =>
        [subsets, subsets.concat(head)])
  );

var test = function() {
  const ret = powerset(['a','b']);
  console.log(ret)
}

module.exports = test;
