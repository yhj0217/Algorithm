function solution(k, tangerine) {
    let answer = 0;
    let tgr = {};
    let cnt = 0;
    
    tangerine.forEach(x => {
        if(tgr[x]) tgr[x]++;
        else tgr[x] = 1;
    })
    
    let sorted = Object.values(tgr).sort((a,b)=>b-a)
    
    for(let i = 0; i<sorted.length; i++){
        cnt += sorted[i];
        if(cnt >= k){
            answer = i+1;
            break;
        }
    }
    return answer;
}