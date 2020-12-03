/**
 * @param {number[]} ratings
 * @return {number}
 */
var r = [1, 2, 87, 87, 87, 2, 1];
var candy = function (ratings) {
  len = ratings.length;
  let arr = new Array(len).fill(1);
  x = len;
  // 至少有长度个糖果
  for (let i = 0; i < len - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      arr[i + 1] = arr[i] + 1;
      // x += 1;
    }
  }
  for (let j = len - 1; j >= 1; j--) {
    if (ratings[j - 1] > ratings[j] && arr[j - 1] <= arr[j]) {
      arr[j - 1] = arr[j] + 1;
      // x += 1;
    }
  }
  console.log(arr);
  return x;
};
console.log(candy(r));
