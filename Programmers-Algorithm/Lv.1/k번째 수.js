function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let a = commands[i][0];
        let b = commands[i][1];
        let c = commands[i][2];
        let result = array.slice(a-1, b).sort((a, b) => a-b);
        
        answer.push(result[c-1]);
    }
    
    return answer;
}