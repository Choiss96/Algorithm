function solution(s) {
    let s_sort = s.split(' ').sort((a, b) => a-b);
    let answer = '';
    
    answer += `${s_sort[0]} ${s_sort[s_sort.length-1]}`
    
    return answer;
}