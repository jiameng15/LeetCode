// 二分查找
// 找到target的下标
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [5];
let target = 5;
// 这个自己写的二分查找
// var search = function (nums, target) {
//   result = -1;
//   start = 0;
//   end = nums.length - 1;
//   // 判断target与中间值的差

//   function binary(start, end) {
//     if (start === end) {
//       return target === nums[start] ? (result = 0) : (result = -1);
//     }
//     if (start + 1 == end) {
//       return target === nums[start]
//         ? (result = start)
//         : target === nums[end]
//         ? (result = end)
//         : (result = -1);
//     } else {
//       mid = Math.ceil((start + end) / 2);
//       if (target >= nums[mid]) {
//         binary(mid, end);
//       } else {
//         binary(start, mid);
//       }
//     }
//   }
//   binary(start, end);
//   return result;
// };
// 标准二分查找
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    pivot;

  while (left <= right) {
    pivot = Math.ceil((right + left) / 2);
    if (nums[pivot] == target) return pivot;
    if (target < nums[pivot]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
};
console.log(search(nums, target));
