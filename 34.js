/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 2],
  target = 2;
// 自己写的
var searchRange = function (nums, target) {
  if (nums.length < 1) {
    return [-1, -1];
  }
  if (nums.length == 1) {
    if (target === nums[0]) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
  if (nums.length > 1) {
    let start = -1,
      end = -1;
    for (let i in nums) {
      if (nums[i] === target) {
        start = i * 1;
        end = i * 1;
        while (end + 1 < nums.length) {
          if (nums[end + 1] === target) {
            end++;
          } else {
            break;
          }
        }
        break;
      }
    }
    return [start, end];
  }
};
// 试试二分查找
// 核心思想
// start === target end === target
// start - 1 !== target end + 1 !== target
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};
const binarySearch = (nums, target, lower) => {
  let start = 0,
    end = nums.length - 1,
    ans;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      end = mid - 1;
      ans = mid;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(searchRange(nums, target));
