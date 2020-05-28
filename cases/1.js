/*
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
var twoSum = function(nums, target) {
    if (!nums || nums.length < 2) return [];

    let dict = {};
    let j = undefined;
    for (let i = 0; i < nums.length; i++) {
        j = dict[target - nums[i]];
        if (j !== undefined) {
            return [j, i];
        }
        dict[nums[i]] = i;
    }
    return []
}

var test = function() {
    var ret = twoSum([3,3], 6);
    console.log(ret)

}

module.exports.test = test;
module.exports.twoSum = twoSum;
