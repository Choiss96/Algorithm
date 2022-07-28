function solution(s){
    let answer1 = 0;
    let answer2 = 0;
 
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'p' || s[i] === 'P') {
            answer1++;
        } else if(s[i] === 'y' || s[i] === 'Y') {
            answer2++;
        }
    }
 
    return answer1 === answer2;
}