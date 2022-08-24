function solution(citations) {
    let arr = citations.sort((a, b) => b-a);
    
    for(let i = 0; i < arr.length; i++) {
        if(i >= arr[i]) {
            return i;
        }
    }
    
    return arr.length;
}