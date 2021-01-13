// https://leetcode.com/problems/two-sum/
/* 
    * 0001. Two Sum
        Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.

        - Example 1:
            Input: nums = [2,7,11,15], target = 9
            Output: [0,1]
            Output: Because nums[0] + nums[1] == 9, we return [0, 1].

        - Example 2:
            Input: nums = [3,2,4], target = 6
            Output: [1,2]
        
        - Example 3:
            Input: nums = [3,3], target = 6
            Output: [0,1]

        -- Constraints (제약조건): 
            1) 2 <= nums.length <= 10(3)
            2) -10(9) <= nums[i] <= 10(9)
            3) -10(9) <= target <= 10(9)
                >> Only one valid answer exists.
*/

// Ver 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
function twoSum (nums, target) {
    const result = [];

    // -- 에러 체크
    if (nums.length < 2 || nums.length > (10**3) ) 
        return new Error(`Error!! ▶ Please check \'nums.length\'.`);
    if (target < -(10**9) || target > (10**9))
        return new Error(`Error!! ▶ Please check \'target\'.`);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < -(10**9) || nums[i] > (10**9)) {
            return new Error(`Error!! ▶ Please check the values ​​in the Array(\'nums\'). Number too large or too small.`);
        }

        // console.log(`i: ${i} nums[i]: ${nums[i]}`);

        for (let j = i+1; j < nums.length; j++) {
            // console.log(`j: ${j} nums[j]: ${nums[j]}`)
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
            }
        }
    }

    return result;
};
*/
// ---

// Ver 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
    const result = [];

    if (nums.length < 2 || nums.length > (10**3))  return;
    if (target < -(10**9) || target > (10**9)) return;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < -(10**9) || nums[i] > (10**9)) return;
        
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
            }
        }
    }

    return result;
};
// ---


let target = 0;

const nums1 = [2,7,11,15];
target = 9;
console.log(twoSum(nums1, target));

const nums2 = [3,2,4];
target = 6;
console.log(twoSum(nums2, target));

const nums3 = [3,3];
target = 6;
console.log(twoSum(nums3, target));

// ========= 에러 테스트
/* 
const arrErr1 = new Array(10**3+1);
console.log(twoSum(arrErr1, 0));

const arrErr2 = new Array(1);
console.log(twoSum(arrErr2, 0));

const targetArr = (-(10**9)-1);
console.log(twoSum([0, 2], targetArr));

const arrErrValue = [(-(10**9)-1), (10**9)+1, 2];
console.log(twoSum(arrErrValue, 0));

const arrErrValue = [(-(10**9)-1), (10**9)+1, 2];
console.log(twoSum(arrErrValue, 0));
*/