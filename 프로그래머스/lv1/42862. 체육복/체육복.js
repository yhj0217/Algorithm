function solution(n, lost, reserve) {    
    let los = lost.filter((l)=> !reserve.includes(l));
    let res = reserve.filter((r)=> !lost.includes(r));
    let answer = n - los.length;
    
    los.sort((a,b)=>a-b);
    
    los.forEach((l)=>{
        if(res.length === 0){
            return answer;
        }        
        else if(res.includes(l-1)){
            res = res.filter(r => r !== l-1);
            answer++;
        }
        else if(res.includes(l+1)){
            res = res.filter(r => r !== l+1);
            answer++;
        }
    })
    
    return answer;
}