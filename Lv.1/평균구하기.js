function solution(arr) {
    let answer = arr.reduce(function(sum, cur){
        return (sum + cur);
    });
    
    answer /= arr.length;
    
    return answer;
}