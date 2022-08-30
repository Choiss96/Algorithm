function removeExtremes(arr) {
    let shortestLen = 20;
    let longestLen = 0;
    let shortestIdx = 0;
    let longestIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= longestLen) {
        longestLen = arr[i].length;
        longestIdx = i;
      }
  
      if (arr[i].length <= shortestLen) {
        shortestLen = arr[i].length;
        shortestIdx = i;
      }
    }
  
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== shortestIdx && i !== longestIdx) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
    // 내가 푼 풀이 -> 6번 테스트 통과 못했음
    // let str1 = arr[0];
    // let str2 = arr[0];
  
    // for(let i = 1; i < arr.length; i++) {
    //   if(str1.length >= arr[i].length) {
    //     str1 = arr[i];
    //   }
    //   if(str2.length <= arr[i].length) {
    //     str2 = arr[i];
    //   }
    // }
  
    // let arr_copy = arr.slice();
    
    // arr_copy = arr_copy.filter(function(item) {
    //   return item !== str1;
    // });
  
    // arr_copy = arr_copy.filter(function(item) {
    //   return item !== str2;
    // });
  
    // return arr_copy;