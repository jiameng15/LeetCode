/**
 * @param {string} S
 * @return {string}
 */
var S = "todrnphcamnomskfrhe";
var reorganizeString = function (S) {
  let arr = S.split("");
  let len = arr.length;
  arr = arr.sort();
  let aMap = new Map();
  console.log(arr);
  let i = 0;
  for (let i of arr) {
    if (aMap.has(i)) {
      aMap.set(i, (aMap.get(i) || 0) + 1);
    } else {
      aMap.set(i, 1);
    }
  }
  console.log(aMap);
  let maxCount = 0;
  for (let m of aMap) {
    // console.log(m)
    // if(m[1]>maxCount){
    //     maxM = m
    // }
    maxCount = Math.max(m[1], maxCount);
  }
  console.log(maxCount);
  nArr = [];
  result = [];
  if (maxCount > (len + 1) / 2) {
    return "";
  } else {
    nArr = [...aMap].sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(nArr);
    let x = 0,
      even = 0,
      odd = 1;
    while (even < S.length) {
      if (nArr[x][1] > 0) {
        result[even] = nArr[x][0];
        even += 2;
        nArr[x][1]--;
      } else {
        x++;
      }
    }
    while (odd < S.length) {
      if (nArr[x][1] > 0) {
        result[odd] = nArr[x][0];
        odd += 2;
        nArr[x][1]--;
      } else {
        x++;
      }
    }
    // for (let x in nArr) {
    //   console.log(x);
    //   let i = 0;
    //   while (i < nArr[x][1]) {
    //     if (x != 0) {
    //       console.log(
    //         "x:" + x + ", i:" + i + ", in:" + ((x * 1 + 1) * i + x * 1)
    //       );
    //       result.splice((x * 1 + 1) * i + x * 1, 0, nArr[x][0]);
    //     } else {
    //       console.log("x:" + x + ", i:" + i + ", in:" + i);
    //       result.push(nArr[x][0]);
    //     }
    //     console.log(result);
    //     i++;
    //   }
    // }
    return result.join("");
  }
};
reorganizeString(S);
