function solution(board, moves) {
    let answer = 0;
    let doll = [];
    moves.forEach((x)=>{
        for(let i=0; i<board.length; i++){
            let next = board[i][x-1];
            if(next !== 0){
                if(next === doll[doll.length-1]){
                    answer+=2;
                    doll.pop();
                } else {
                    doll.push(next);
                }
                board[i][x-1] = 0;
                break;
            }
        }
    })
    return answer;
}