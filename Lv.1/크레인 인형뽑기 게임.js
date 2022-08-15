function solution(board, moves) {
    let answer = 0;
    let doll = [];
    
    // 바구니에 옮겨 담음
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i]-1] === 0) continue;
            else {
                doll.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
 
    // 붙어있는 같은 인형 제거
    for(let i = 0; i < doll.length-1; i++) {
        if(doll[i] === doll[i+1]) {
            doll.splice(i, 2);
            i -= 2;
            answer += 2;
        }
    }
    
    return answer;
}