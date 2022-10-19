function solution(X, Y) {
    let answer = "";
    let x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    for(let i = 0; i < X.length; i++) {
        x[X[i]]++;
    }
    for(let i = 0; i < Y.length; i++) {
        y[Y[i]]++;
    }
    
    for(let i = 9; i >= 0; i--) {
        if(x[i] === 0 || y[i] === 0) {
            continue;
        } else {
            for(let j = 0; j < Math.min(x[i], y[i]); j++) {
                answer += i;
            }
        }
    }
    
    if(answer.length === 0) return "-1";
    else if(answer[0] === "0") return "0";
    
    return answer;
}