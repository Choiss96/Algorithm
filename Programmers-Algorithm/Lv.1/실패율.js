function solution(N, stages) {
    let answer = [];
    let count_clearfail = 0;
    let count_reach = 0;
    let result = [];
    
    // answer에 N개 만큼 0으로 채우기
    for(let i = 0; i < N; i++) {
        answer.push(0);
    }
    
    // 실패율 구해서 라운드별로 answer에 할당
    for(let i = 1; i <= N; i++) {
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] >= i) {
                count_reach++;
            }
            if(stages[j] === i) {
                count_clearfail++;
            }
            if(count_reach === 0) answer[i-1] = 0;
            else answer[i-1] = count_clearfail / count_reach;
        }
        count_clearfail = 0;
        count_reach = 0;
    }
    
    // 실패율이 큰 순서대로 result에 push
    for(let i = 0; i < N; i++) {
        let a = Math.max(...answer);
        if(a < 0) break;
        
        for(let j = 0; j < answer.length; j++) {
            if(answer[j] === a) {
                result.push(j+1);
                answer[j] = -1;
            }
        }
    }
    
    return result;
}