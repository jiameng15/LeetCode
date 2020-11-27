/**
 * @param {string[]} A
 * @return {string}
 */
let A = ["alex", "loves", "leetcode"];
var shortestSuperstring = function (A) {
  // 没有任意是子字符串,则需要判断
  // 首位是其他字符串的末尾
  // 末尾是其他字符串的首位
  // 符合规则,两两拼接,继续对比
  let len = A.length;
  if (A.length === 1) {
    return A[0];
  }
  console.log("开始");
  function calc(A) {
    if (A.length === 1) {
      return A[0];
    }
    let first = A.shift();
    for (let i = 0; i < A.length - 1; i++) {
      for (let j = first.length - 1; j > 0; j--) {
        // 从头取j位,向尾部拼接
        if (first.slice(0, j) === A[i].slice(-j)) {
          A.push(A[i] + first.slice(j));
          break;
        }

        // 从尾取j位,向头部拼接
        if (first.slice(-j) === A[i].slice(0, j)) {
          A.push(first.slice(0, j) + A[i]);
          break;
        }
      }
    }
    if (A.length === len) {
      return A.join("");
    } else if (A.length < len) {
      calc(A);
    }
  }

  return calc(A);
};

shortestSuperstring(A);
