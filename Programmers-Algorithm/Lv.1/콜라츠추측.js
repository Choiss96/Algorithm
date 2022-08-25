function solution(num) {
    let answer = num;
    let result = 0;
    
    if(num === 1) {
        return 0;
    }
    
    for(let i = 1; i < 501; i++) {
        if(answer % 2 === 0) {
            answer /= 2;
        } else {
            answer = (answer * 3) + 1;
        }
        
        result = i;
        if(answer === 1){
            break;
        }
    }
    
    if(answer !== 1) {
        return -1;
    }
    
    return result;
}