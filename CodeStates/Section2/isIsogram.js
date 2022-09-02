function isIsogram(str) {
    let str_lower = str.toLowerCase();
  
    for(let i = 0; i < str_lower.length; i++) {
      for(let j = i+1; j < str_lower.length; j++) {
        if(str_lower[i] === str_lower[j]) {
          return false;
        }
      }
    }
    
    return true;
  }