function solution(n) {
    let f_first = 1;
    let f_second = 1;
    let answer = 0;
    
    for(let i = 3; i <= n; i++) {
        answer = f_first + f_second;
        f_first = f_second%1234567;
        f_second = answer%1234567;
    }
    
    return answer % 1234567;
}