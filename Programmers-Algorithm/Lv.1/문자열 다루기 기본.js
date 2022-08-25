function solution(s) {
    let answer = s.split('');
    
    if(s.length === 4 || s.length === 6) {
        for(let i = 0; i < answer.length; i++) {
            if (isNaN(parseInt(answer[i]))) {
                return false;
            }
        }
        return true;
    }else {
        return false;
    }
}