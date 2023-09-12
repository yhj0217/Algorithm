function solution(N, stages) {
    let answer = [];
    let rate = [];
    let reached = 0;   
    let fail = 0;
    let percent = 0;
    
    for(let i=1; i<N+1; i++){
        for(let j=0; j<stages.length; j++){
            if(i === stages[j]){
                fail++;
            }
            if(i <= stages[j]){
                reached++;
            }
        }
        
        percent = fail / reached;
        rate.push({ index: i, value: percent});
        fail = 0;
        reached = 0;
    }
    rate.sort((a,b)=>{
        if(a.value === b.value) return a.index - b.index
        return b.value - a.value
    })
    
    for(let i=0; i<rate.length; i++){
        answer.push(rate[i].index);
    }    
    return answer;
}