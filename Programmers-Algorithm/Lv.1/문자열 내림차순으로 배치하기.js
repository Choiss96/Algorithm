function solution(s) {
    let answer = s.split('');
        
    answer.sort((a, b) => {
        if(a > b) return -1;
        else if(b > a) return 1;
        else return 0;
    });
    
    let result = answer.join('');
    
    return result;
}