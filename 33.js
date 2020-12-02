/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1],
  target = 0;
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  if (nums.length === 0) {
    return -1;
  }
  if (nums.length === 1) {
    return target === nums[0] ? 0 : -1;
  }
  if (nums.length > 1) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[0] <= nums[mid]) {
        // 正确排序条件,正确排序在mid前,则 下标0对比 <=target< 下标mid
        if (nums[0] <= target && target < nums[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        // 非正确排序,正确飘絮在mid后,则 下标mid < target <= nums.length-1
        if (nums[mid] < target && target <= nums[nums.length - 1]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    return -1;
  }
};
const binary = (nums, target, start, end) => {
  let ans = -1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) ans = mid;
    if (nums[mid] < target) start = mid + 1;
    if (nums[mid] > target) end = mid - 1;
  }
  return ans;
};

console.log(search(nums, target));
