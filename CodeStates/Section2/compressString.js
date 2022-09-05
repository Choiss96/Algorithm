function compressString(str) {
    let count = 0;
    let result = ''
  
    for(let i = 0; i < str.length; i++) {
      for(let j = i+1; j <= str.length; j++) {
        if(str[i] === str[j]) {
          count++;
        } else {
          if(count >= 2) {
            result += `${count+1}${str[i]}`;
            i += count;
          } else {
            result += str[i];
          }
          count = 0;
          break;
        }
      }
    }
  
    return result;
  }