/**
 * @param {number[]} nums
 * @return {boolean}
 */
var nums = [1, 2, 3, 3, 4, 5];
var isPossible = function (nums) {
  let len = nums.length;
  if (len < 3) {
    return false;
  }
  let countMap = new Map();
  let endMap = new Map();
  for (let x of nums) {
    count = (countMap.get(x) || 0) + 1;
    countMap.set(x, count);
  }
  for (let x of nums) {
    count = countMap.get(x) || 0;
    if (count > 0) {
      endCount = endMap.get(x - 1) || 0;
      if (endCount > 0) {
        countMap.set(x, count - 1);
        endMap.set(x - 1, endCount - 1);
        endMap.set(x, (endMap.get(x) || 0) + 1);
      } else {
        count1 = countMap.get(x + 1);
        count2 = countMap.get(x + 2);
        if (count1 > 0 && count2 > 0) {
          countMap.set(x, count - 1);
          countMap.set(x + 1, count1 - 1);
          countMap.set(x + 2, count2 - 1);
          endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1);
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
console.log(isPossible(nums));
