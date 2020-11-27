/**
 * @param {string[]} A
 * @return {string}
 */
let A = ["alex", "loves", "leetcode"];
// let A = ["abc", "bcdf", "bce"];
var shortestSuperstring = function (A) {
  // 没有任意是子字符串,则需要判断
  // 首位是其他字符串的末尾
  // 末尾是其他字符串的首位
  // 符合规则,两两拼接,继续对比
  // let len = A.length;
  // 根据长短排序A
  let sortA = A.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(sortA);
  if (A.length === 1) {
    return A[0];
  }
  console.log("开始");
  function calc(A) {
    let flag = 0;
    if (A.length === 1) {
      return A[0];
    }
    let first = A.shift();
    for (let i = 0; i < A.length - 1; i++) {
      for (let j = first.length - 1; j > 0; j--) {
        // 从头取j位,向尾部拼接
        if (first.slice(0, j) === A[i].slice(-j)) {
          A[i] = A[i] + first.slice(j);
          flag++;
          break;
        }

        // 从尾取j位,向头部拼接
        if (first.slice(-j) === A[i].slice(0, j)) {
          A[i] = first.slice(0, j) + A[i];
          flag++;
          break;
        }
      }
    }
    if (flag > 0) {
      // 有重叠部分
    } else {
      //
      first + A[i];
    }
    // if (A.length === len) {
    //   return A.join("");
    // } else if (A.length < len) {
    //   calc(A);
    // }
  }
  // // 复制数组
  let B = [...A];
  calc(B);
};

shortestSuperstring(A);
