function solution(n) {
    let sqrt_n = Math.sqrt(n);
    
    if(sqrt_n % 1 !== 0) {
        return -1;
    }else {
        sqrt_n++;
    }
    
    return Math.pow(sqrt_n, 2);
}