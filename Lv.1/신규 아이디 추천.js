function solution(new_id) {
    let answer = '';
    let newId = new_id.toLowerCase(); // 1단계
    let number = /[0-9]/;
    let str = /[a-z]/;
    
    // 2단계
    for(let i = 0; i < newId.length; i++) {
        if(number.test(newId[i]) || str.test(newId[i]) || newId[i] === '-' || newId[i] === '_' || newId[i] === '.') { 
            answer += newId[i];
        }
    }
    
    answer = answer.split('');
    
    // 3단계
    for(let i = 0; i < answer.length-1; i++) { 
        if(answer[i] === '.' && answer[i+1] === '.') { 
            answer.splice(i, 1);
            i--;
        }
    }
    
    // 4단계
    if(answer[0] === '.') answer.shift();
    if(answer[answer.length-1] === '.') answer.pop();
    
    // 5단계
    if(answer.length === 0) {
        answer.push('a');
    }
    
    // 6단계
    if(answer.length >= 16) {
        if(answer[14] === '.') answer = answer.slice(0, 14);
        else answer = answer.slice(0, 15);
    }
    
    // 7단계
    if(answer.length <= 2) {
        answer.push(answer[answer.length-1]);
        if(answer.length <= 2) answer.push(answer[answer.length-1]);
    }
    
    answer = answer.join('');
    
    
    return answer;
}