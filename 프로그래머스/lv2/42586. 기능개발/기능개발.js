function solution(progresses, speeds) {
    let answer = [];
    let max;            
    let cnt = 1;
    
    let pros = progresses.map((val,idx) => Math.ceil((100 - val) / speeds[idx]));
    max = pros[0];
    for(let i = 1; i<pros.length; i++){
        if(max >= pros[i]){
            cnt += 1;
        } else {
            answer.push(cnt);
            cnt = 1;
            max = pros[i];
        }
    }
    answer.push(cnt);
    
    return answer;
}