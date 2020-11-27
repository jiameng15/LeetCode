/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  // 所有的数组长度一致
  // let len = A.length
  let result = 0;
  // 方法一 遍历所有情况
  // for(let i = 0;i<len;i++){
  //     for(let j = 0;j<len;j++){
  //         for(let k = 0;k<len;k++){
  //             for(let l = 0;l<len;l++){
  //                 if(A[i]+B[j]+C[k]+D[l]===0){
  //                     result++
  //                 }
  //             }
  //         }
  //     }
  // }

  // 方法二 分组
  // A B 一组,计算所有结果
  // let AB=[],CD = [];
  // for(let i = 0;i<len;i++){
  //     for(let j = 0;j<len;j++){
  //         AB.push(A[i]+B[j])
  //     }
  // }
  // for(let k = 0;k<len;k++){
  //     for(let l = 0;l<len;l++){
  //         CD.push(C[k]+D[l])
  //     }
  // }
  // AB.map(x=>{
  //     CD.map(y=>{
  //         if(x+y ===0){
  //             result++
  //         }
  //     })
  // })
  // 方法三 分组 Map
  let mapa = new Map();
  for (let i of A) {
    for (let j of B) {
      mapa.set(i + j, (mapa.get(i + j) || 0) + 1);
    }
  }

  for (let k of C) {
    for (let l of D) {
      if (mapa.has(-(k + l))) {
        result += mapa.get(-(k + l));
      }
    }
  }

  return result;
};
