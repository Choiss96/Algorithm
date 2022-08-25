function solution(s) {
    let answer = '';
    let s_split = s.split(' ');
    
    for(let i = 0; i < s_split.length; i++) {
        for(let j = 0; j < s_split[i].length; j++) {
            if(j % 2 === 0) {
                answer += s_split[i][j].toUpperCase();
            } else {
                answer += s_split[i][j].toLowerCase();
            }
        }
        if(i === s_split.length-1) break;
        answer += ' ';
    }
    
    return answer;
}