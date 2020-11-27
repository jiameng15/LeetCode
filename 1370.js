/**
 * @param {string} s
 * @return {string}
 */
// var sortString = function(s) {
//     var flag = 1
//     var sArr = bSort(s.split(''))

//     var str = ''
//     var tempArr= []
//     function sort(arr){
//         var first = arr.shift()
//         var strLast =
//         for(let item of arr){
//             if(first===item){
//                 tempArr.push(arr.shift())
//             }else{
//                 str+first
//             }
//         }
//     }
//     function bSort(arr) {
//         var len = arr.length;
//         for (var i = 0; i < len-1; i++) {
//             for (var j = 0; j < len - 1 - i; j++) {
//                 // 相邻元素两两对比，元素交换，大的元素交换到后面
//                 if (arr[j] > arr[j + 1]) {
//                     var temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//             }
//         }
//         return arr;
//     }

//     // return str
//     return sArr
// };

// 在js中英文字母可以直接比较大小
// string 转 array
// 取数组中第一个,与其后的字母比较

// 情况一,从小到大排序
// 如果小于等于所有后续字母,则填入新的字符串
// 如果大于所有后续字母,则放入数组末端

// 情况二,从大到小排序
// 如果大于等于所有后续字母,则填入新的字符串
// 如果小于所有后续字母,则放入数组末端

// 用flag 判断情况一还是情况二
// flag === 1 情况一 默认
// flag === 2 情况二

// 原始字符串排序
var s = "aaaabbbbcccc";
console.log(s);
var sortString = function (s) {
  var flag = 1;
  var str = "";
  var tempArr = [];
  var sArr = s.split("").sort();
  function sort1(arr, start) {
    if (flag === 1) {
      console.log("111");
      let temp = arr.shift();
      if (str.slice(-1) <= temp && start == 0) {
        str += temp;
      } else if (str.slice(-1) < temp) {
        str += temp;
      } else {
        tempArr.push(temp);
      }
    }
    if (flag === 2) {
      console.log("222");

      let temp = arr.shift();
      if (str.slice(-1) >= temp && start == 0) {
        str += temp;
      } else if (str.slice(-1) > temp) {
        str += temp;
      } else {
        tempArr.push(temp);
      }
    }
  }
  function sMap(arr) {
    tempArr = [];
    var copysArr = JSON.parse(JSON.stringify(arr));
    for (let i in arr) {
      console.log(i);
      sort1(copysArr, i);
      if (i == arr.length - 1) {
        console.log("转换大小顺序");
        flag === 1 ? (flag = 2) : (flag = 1);
        tempArr = tempArr.reverse();
        if (str.length !== s.length) {
          sMap(tempArr);
        }
      }
    }
  }
  sMap(sArr);
  return str;
};
console.log(sortString(s));
