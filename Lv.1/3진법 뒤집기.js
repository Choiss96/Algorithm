function solution(n) {
    let answer = 0;
    let num = n.toString(3).split('').reverse().join('');
    
    answer = parseInt(num, 3);
    
    return answer;
}