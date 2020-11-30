/**
 * @param {number} x
 * @return {number}
 */
let x = 8;
var mySqrt = function (x) {
  start = 0;
  end = Math.ceil(x / 2);
  while (start <= end) {
    mid = Math.ceil((start + end) / 2);
    if (mid * mid === x) {
      return mid;
    } else if ((mid - 1) * (mid - 1) < x && mid * mid > x) {
      return mid - 1;
    }
    if (x < mid * mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};
// // 遍历所有结果,比对
// var mySqrt = function (x) {
//   let root = 1;
//   while (root * root <= x) {
//     root++;
//   }
//   return root - 1;
// };
console.log(mySqrt(x));
