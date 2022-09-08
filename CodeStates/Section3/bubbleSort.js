const bubbleSort = function (arr) {
    for(let i = arr.length-1; i >= 0; i--) {
      let count = 0;
      for(let j = 0; j < i; j++) {
        if(arr[j] > arr[j+1]) {
          count++;
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
      if(count === 0) break;
    }
  
    return arr;
  };