function solution(n) {
    let answer = 0;
    
    answer = Math.sqrt(n);
    
    if(Number.isInteger(answer) === true){
        answer = (answer+1) ** 2 ;
    }else{
        answer = -1;
    }
    
    return answer;                                                   
}