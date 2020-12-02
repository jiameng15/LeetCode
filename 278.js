/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 自己写的 标准的二分查找
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1,
      right = n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
        return mid;
      }
      if (isBadVersion(mid) && isBadVersion(mid - 1)) {
        right = mid - 1;
      }
      if (!isBadVersion(mid - 1) && !isBadVersion(mid)) {
        left = mid + 1;
      }
    }
  };
};
// 尝试使用一个 查右邻 的二分查找

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1,
      right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
