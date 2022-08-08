function solution(n, m) {
    let answer = [];
    let gcd_num = 0;
    let lcm_num = 0;
    
    if(n > m) {
        [n, m] = [m, n];
    }
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && m % i === 0) {
            gcd_num = i;
        }
    }
    
    lcm_num = n * m / gcd_num;
    
    answer.push(gcd_num);
    answer.push(lcm_num);
    
    return answer;
}