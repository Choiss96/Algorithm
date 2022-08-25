function solution(n) {
    let answer = String(n).split('');
    let result = [];
    
    for(let i = answer.length-1; i >= 0; i--) {
        let a = Number(answer[i]);
        result.push(a);
    }
    
    return result;
}