/**
 * 204. 计数质数
 * 统计所有小于非负整数 n 的质数的数量。
 * @param {number} n
 * @return {number}
 */
var n = 10;
var countPrimes = function (n) {
  let ans = 0;
  for (let i = 2; i < n; i++) {
    ans += isPrime(i);
  }
  return ans;
};
const isPrime = (x) => {
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return 0;
    }
  }
  return 1;
};
console.log(countPrimes(n));
// 质数:数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数（规定1既不是质数也不是合数）。
