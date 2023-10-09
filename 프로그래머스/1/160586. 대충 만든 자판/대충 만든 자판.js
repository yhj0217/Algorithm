function solution(keymap, targets) {
    let answer = [];
    let sum = 0;
    
    targets.forEach((x)=>{
        for(let i=0; i<x.length; i++){
            let cnt = Infinity;
            keymap.forEach((y)=>{
                let idx = y.indexOf(x[i])
                
                if(idx>-1){
                    if(idx<cnt) cnt = idx+1
                    else cnt = cnt
                }                
            })
            sum += cnt;
        }
        answer.push(sum);
        sum = 0;
    })
    answer = answer.map(x=>{
        if(x === Infinity){
            x = -1;
        }
        return x
    })
    
    return answer;
}