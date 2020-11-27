/**
 * @param {number[]} nums
 * @return {number}
 */
// let nums = [1, 3, 6, 9];
let nums = [1, 3, 100];
var maximumGap = function (nums) {
  let len = nums.length;
  // 数组元素个数小于2
  if (len < 2) {
    return 0;
  }
  // 对数组排序
  nums = nums.sort(sequence);
  // 需要一个比较函数
  function sequence(a, b) {
    return a - b;
  }
  // 起始指针左
  let start = 0;
  // 结束指针右
  let end = 1;
  let arr = [];

  for (let i = start; i < len - 1; i++) {
    let minus = nums[end] - nums[start];
    arr.push(minus);
    if (end === len - 1) {
      break;
    }
    start++;
    end++;
  }
  return Math.max(...arr);
};
maximumGap(nums);
