function convertListToObject(arr) {
    let result = {};
  
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length === 0) {
        continue;
      }
      
      let a = arr[i][0];
      let b = arr[i][1];
  
      if(result[a] === undefined) {
        result[a] = b;
      }
    }
  
    return result;
  }
  