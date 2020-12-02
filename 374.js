/**
 * 374. 猜数字大小
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1,
    end = n;
  while (start <= n) {
    const mid = Math.floor((start + end) / 2);
    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) end = mid - 1;
    if (guess(mid) === 1) start = mid + 1;
  }
};
