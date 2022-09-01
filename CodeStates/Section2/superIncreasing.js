function superIncreasing(arr) {
    let sum = arr[0];
  
    for(let i = 1; i < arr.length; i++) {
      if(sum >= arr[i]) {
        return false;
      } else {
        sum += arr[i];
      }
    }
    
    return true;
  }