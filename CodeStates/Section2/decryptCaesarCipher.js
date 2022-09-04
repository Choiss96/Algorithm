function decryptCaesarCipher(str, secret) {
    let arr = str.split('');
    let result = '';
  
    for(let i = 0; i < arr.length; i++) {
      let a = '';
  
      if(arr[i] === ' ') {
        result += ' ';
      } else {
        a = arr[i].charCodeAt(0) - secret;
      }
  
      if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
        if(a < 97) a += 26;
        result += String.fromCharCode(a);
      }
    }
  
    return result;
  }