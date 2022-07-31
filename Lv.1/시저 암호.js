function solution(s, n) {
    let answer = s.split('');
    let result = '';
    
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === ' ') {
            result += ' ';
        } else {
            let a = answer[i].charCodeAt(0) + n;
            
            if(answer[i].charCodeAt(0) >= 65 && answer[i].charCodeAt(0) <= 90) {
                if(a > 90) a -= 26;
            } else if(answer[i].charCodeAt(0) >= 97 && answer[i].charCodeAt(0) <= 122) {
                if(a > 122) a -= 26;
            }
            
            result += String.fromCharCode(a);
        }
    }
    
    return result;
}