/**
 * 寻找数组中缺少的最小正整数。
 */

var arr1 = [2, 3, 1, 6, 4];
var arr2 = [-1, 3, 0, 9, 1];
var arr3 = [3, 2, 5, 4, 7];

function findSmallestMissingPositiveNumber(arr) {
  if (arr === undefined || arr.length == 0) {
    return 1;
  }
  arr.sort(function (x, y) {
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    }
    return 0;
  });
  //console.log(arr);
  var re = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] - re > 1) {
      return re + 1;
    } else if (arr[i] > 0) {
      re = arr[i];
    }
  }
  return re + 1;
}

console.log(findSmallestMissingPositiveNumber(arr1)); //5
console.log(findSmallestMissingPositiveNumber(arr2)); //2
console.log(findSmallestMissingPositiveNumber(arr3)); //1
