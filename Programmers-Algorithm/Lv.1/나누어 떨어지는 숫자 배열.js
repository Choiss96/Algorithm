function solution(arr, divisor) {
    let arr_sort = arr.sort((a, b) => a-b);
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr_sort[i] % divisor === 0) {
            answer.push(arr_sort[i]);
        }
    }
    
    if(answer.length === 0) {
        return [-1];
    }
    
    return answer;
}