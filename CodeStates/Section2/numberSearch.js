function numberSearch(str) {
    let check = /^[0-9]+$/;
    let sum = 0;
    let str_length = 0;
  
    if(str.length === 0) {
      return 0;
    }
  
    for(let i = 0; i < str.length; i++) {
      if(check.test(str[i])) {
        sum += Number(str[i]);
      }
      if(str[i] === ' ' || check.test(str[i])) {
        continue;
      } else {
        str_length++;
      }
    }
  
    return Math.round(sum / str_length);
  }