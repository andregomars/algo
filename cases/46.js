
/*
46. Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/*
[1,2,3,4]
1, [2,3,4]
  1, [2, [3,4]]
  1, 2, [3,4]
    1, 2, 3, [4]
      1, 2, 3, 4, []

2, [1, 3, 4]
*/

var permute = function(nums) {
  console.log(nums)
    
};

var test = function() {
  permute([1,2,3]);
}

module.exports = test;