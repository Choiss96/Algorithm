function convertDoubleSpaceToSingle(str) {
    let str_split = str.split(' ');
    let result = [];
    let result1 = '';
  
    for(let i = 0; i < str_split.length; i++) {
      if(str_split[i] === '') {
        continue;
      } else {
        result.push(str_split[i]);
      }
    }
  
    result1 = result.join(' ');
  
    return result1;
  }