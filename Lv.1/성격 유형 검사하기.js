function solution(survey, choices) {
    let answer = '';
    let mbti = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0,    
    }
    
    for(let i = 0; i < survey.length; i++) {
        if(choices[i] === 1) {
            mbti[survey[i][0]] += 3;
        } else if (choices[i] === 2) {
            mbti[survey[i][0]] += 2;
        } else if (choices[i] === 3) {
            mbti[survey[i][0]] += 1;
        } else if(choices[i] >= 5 && choices[i] <= 7) {
            mbti[survey[i][1]] += choices[i]-4;
        } else continue;
    }
    
    if(mbti.R >= mbti.T) answer += 'R';
    else answer += 'T';
    
    if(mbti.C >= mbti.F) answer += 'C';
    else answer += 'F';
    
    if(mbti.J >= mbti.M) answer += 'J';
    else answer += 'M';
    
    if(mbti.A >= mbti.N) answer += 'A';
    else answer += 'N';
    
    return answer;
}