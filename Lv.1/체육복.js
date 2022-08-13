function solution(n, lost, reserve) {
    // 체육복 없는 학생, 여벌 체육복 있는 학생 오름차순 정렬
    lost.sort((a, b) => a-b);
    reserve.sort((a, b) => a-b);
    
    // 여벌 체육복이 있고 메인 체육복을 도난 당한 학생 제외
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i] === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--;
                j--;
            }
        }
    }
    
    // 체육복 빌리기
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i]-1 === reserve[j] || lost[i]+1 === reserve[j]) {
                lost.splice(i, 1);
                reserve.splice(j, 1);
                i--;
                j--;
            }
        }
    }
    
    // 전제 인원에서 체육복 못 빌린 학생 제외
    let answer = n - lost.length;
    
    return answer;
}