/**
 * @param {string} s
 * @return {number}
 */
// 方法一 视窗法
// 视窗起始点 start 从-1开始,因为使用charAt()  参数为-1时,取出单个字符是空
// 视窗结束点 end 从0开始,则视窗长度 最小长度end-start = 0,最大长度 s.length
var lengthOfLongestSubstring = function (s) {
  let set = new Set(),
    num = 0,
    end = 0,
    sLen = s.length;
  for (let i = 0; i < sLen; i++) {
    console.log(i);
    // 从首位开始扩大视窗
    if (i > 0) {
      set.delete(s.charAt(i - 1));
    }

    while (sLen - end > end && !set.has(s.charAt(end))) {
      set.add(s.charAt(end));
      end++;
    }
    num = Math.max(num, end - i);
  }

  return num;
};
var s = "abcabcbb";
lengthOfLongestSubstring(s);
// 没有重复 适合用Set
// 写出来了一个最长序列///不是最长字符串
// function sSplit(str) {
//         let arr = str.split(str.slice(0, 1));
//         let next = arr.join("");
//         num++;
//         console.log(next);
//         if (next === "") {
//         return;
//         } else {
//         sSplit(next);
//         }
//     }
//     sSplit(s);
//     console.log(num);
