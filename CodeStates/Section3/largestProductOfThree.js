const largestProductOfThree = function (arr) {
    let arr_sort = arr.sort((a, b) => a-b);
    let max_num = arr_sort[0]*arr_sort[1]*arr_sort[2];
  
    for(let i = 0; i < arr_sort.length-2; i++) {
      for(let j = i+1; j < arr_sort.length-1; j++) {
        for(let k = j+1; k < arr_sort.length; k++) {
          if(arr_sort[i]*arr_sort[j]*arr_sort[k] > max_num) {
            max_num = arr_sort[i] * arr_sort[j] * arr_sort[k];
          }
        }
      }
    }
  
    return max_num;
  };