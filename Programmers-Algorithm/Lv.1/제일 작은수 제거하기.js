function solution(arr) {
    let answer = arr.indexOf(Math.min(...arr));
    
    if(arr.length < 2) {
        return [-1];
    }
    
    arr.splice(answer, 1);
    
    return arr;
}