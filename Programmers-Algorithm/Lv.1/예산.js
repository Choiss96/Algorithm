function solution(d, budget) {
    let answer = 0;
    let result = 0;
    let d_sort = d.sort((a, b) => a-b);
    
    for(let i = 0; i < d.length; i++) {
        if(answer + d_sort[i+1] <= budget){
            answer += d_sort[i];
            result = i + 1;
        }
        else if(answer + d_sort[d_sort.length-1] <= budget) {
            result = i + 1;
        }
    }
    
    return result;
}