function solution(a, b) {
    let answer = 0;
    let x, y = 0;
    
    if(a <= b) {
        x = a;
        y = b;
    } else {
        x = b;
        y = a;
    }
    
    for(let i = x; i <= y; i++) {
        answer += i;
    }
    
    return answer;
}