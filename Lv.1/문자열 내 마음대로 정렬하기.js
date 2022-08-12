function solution(strings, n) {
    let answer = [];
    let result = [];
    strings.sort();
    
    for(let i = 0; i < strings.length; i++) {
        answer.push(strings[i][n]);
    }
    
    answer.sort();
    answer = Array.from(new Set(answer));
    
    for(let i = 0; i < answer.length; i++) {
        for(let j = 0; j < strings.length; j++) {
            if(strings[j][n] === answer[i]) {
                result.push(strings[j]);
            }
        }
    }
    
    return result;
}