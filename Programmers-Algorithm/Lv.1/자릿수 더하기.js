function solution(n) {
    let n_split = String(n).split('');
    let result = 0;
    
    for(let i = 0; i < n_split.length; i++) {
        result += Number(n_split[i]);
    }
 
    return result;
}