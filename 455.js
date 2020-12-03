/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var g = [7, 8, 9, 10],
  s = [5, 6, 7, 8];

var findContentChildren = function (g, s) {
  if (s.length === 0) {
    return 0;
  }
  g = g.sort((a, b) => {
    return a - b;
  });
  s = s.sort((a, b) => {
    return a - b;
  });
  // 不需要考虑没有饼干的孩子
  // 能吃饱的情况
  // 饼干比孩子多,且每个饼干都大于等于最小的孩子
  // 吃不饱的情况
  // 饼干比孩子多,但是
  // 饼干比孩子少
  console.log(g);
  console.log(s);
  let result = 0;
  let j = 0;

  for (let i = 0; i < g.length; i++) {
    while (j <= s.length) {
      if (g[i] <= s[j]) {
        result += 1;
      }
      j++;
    }
  }
  return result;
};
console.log(findContentChildren(g, s));
