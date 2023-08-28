function solution(k, score) {
    let answer = [];
    let add = [];
    
    for(let i = 0; i < score.length; i++){
        add.push(score[i]);
        add.sort((a,b)=>b-a);
        
        if(add.length >= k){
            answer.push(add[k - 1]);
        }
        else
            answer.push(add[add.length - 1]);
    }
    return answer;
}