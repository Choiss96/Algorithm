function letterCapitalize(str) {
    let answer = str.split(' ');
  
    if(str.length === 0) {
      return '';
    }
    
    for(let i = 0; i < answer.length; i++) {
      if(answer[i] === '') {
        answer[i] = '';
      } else {
        answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1);
      }
    }
  
    let result = answer.join(' ');
  
    return result;
  }