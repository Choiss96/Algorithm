function readVertically(arr) {
    let result = '';
    let max_length = 0;
  
    // arr 요소 중 가장 긴 길이 찾기
    for(let i = 0; i < arr.length; i++) {
      if(max_length < arr[i].length) {
        max_length = arr[i].length;
      }
    }
  
    // 문자열 세로로 읽기
    for(let i = 0; i < max_length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(arr[j][i] === undefined) {
          continue;
        } else {
          result += arr[j][i];
        }
      }
    }
  
    return result;
  }