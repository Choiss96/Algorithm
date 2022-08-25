function solution(answers) {
    let answer = [];
    let count = [0, 0, 0];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5];
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === one[i % one.length]) count[0]++;
        if(answers[i] === two[i % two.length]) count[1]++;
        if(answers[i] === three[i % three.length]) count[2]++;
    }
    
    let max_num = Math.max(...count);
    
    for(let i = 0; i < count.length; i++) {
        if(count[i] === max_num) answer.push(i+1);
    }
    
    return answer;
}