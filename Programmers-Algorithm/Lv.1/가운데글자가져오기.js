function solution(s) {
    let answer = '';
    let divide = Math.floor(s.length / 2);
    
    if(s.length % 2 === 1) {
        answer += s[divide];
    }else {
        answer += `${s[divide-1]}${s[divide]}`;                     
    }
    
    return answer;
}