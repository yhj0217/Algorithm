function solution(board) {
   let answer = 0;
    let mine = [[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]];
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] == 1){
                for(let k=0; k<mine.length; k++){
                   if(0<= i+mine[k][0] && i+mine[k][0] < board.length &&
                     0<= j+mine[k][1] && j+mine[k][1] < board.length && board[i+mine[k][0]][j+mine[k][1]]==0) board[i+mine[k][0]][j+mine[k][1]]=2
                }
            }
        }
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j] == 0)
                answer++;
        }
    }
    
    
    return answer;
}
   