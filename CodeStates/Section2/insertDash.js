function insertDash(str) {
    let result = '';
  
    for(let i = 0; i < str.length; i++) {
      if(i === str.length-1) {
        result += str[i];
      } else if(str[i] % 2 === 1 && str[i+1] % 2 === 1){
        result += str[i] + '-'; 
      } else {
        result += str[i];
      }
    }
  
    return result;
  }  