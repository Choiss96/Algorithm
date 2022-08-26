function powerOfTwo(num) {
    let result = num;
  
    if(num === 1){
      return true;
    }
  
    while(result > 2) {
      result /= 2;
    }
  
    if(result === 2) {
      return true;
    }
  
    return false;
  }