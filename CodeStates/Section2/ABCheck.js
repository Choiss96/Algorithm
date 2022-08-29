function ABCheck(str) {
    let str_lower = str.toLowerCase();
  
    if(str.length < 5) {
      return false;
    }
  
    for(let i = 0; i < str_lower.length-4; i++) {
      if(str_lower[i] === 'a' && str_lower[i+4] === 'b') {
        return true;
      } else if(str_lower[i] === 'b' && str_lower[i+4] === 'a') {
        return true;
      }
    }
    return false;
  }