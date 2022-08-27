function firstReverse(str) {
      let result = '';
      let answer = str.split('');
      answer = answer.reverse();
    
      for(let i = 0; i < answer.length; i++) {
        result += answer[i];
      }
    
      return result;
    }
    