function firstCharacter(str) {
    let str_split = str.split(' ');
    let result = '';
  
    for(let i = 0; i < str_split.length; i++) {
      result += str_split[i].slice(0, 1);
    }
  
    return result;
  }
  