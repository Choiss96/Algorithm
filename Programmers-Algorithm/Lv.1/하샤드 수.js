function solution(x) {
    let answer = String(x).split('');
    let sum = 0;
    
    for(let i = 0; i < answer.length; i++){
        sum += parseInt(answer[i]);
    }
    
    if(x % sum === 0) {
        return true;
    } else {
        return false;
    }
}