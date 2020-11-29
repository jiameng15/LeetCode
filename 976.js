// 976. 三角形的最大周长
/**
 * @param {number[]} A
 * @return {number}
 */
let arr = [2, 1, 2];
var largestPerimeter = function(A) {
  A.sort((a, b) => b - a);
   for (let i = 0; i <A.length- 2; i++) {
       if (A[i + 2] + A[i + 1] > A[i]) {
           return A[i + 2] + A[i + 1] + A[i];
       }
   }
   return 0;
};
largestPerimeter(arr);
