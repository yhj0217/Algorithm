function solution(lottos, win_nums) {
    let zero = 0;
    
    lottos.sort((a,b)=> a-b);
    win_nums.sort((a,b)=> a-b);
    lottos = lottos.filter(x => !win_nums.includes(x));
    console.log(lottos)
    if(lottos.length === 0) return [1,1];    
    else{
        for(let i=0; i<lottos.length; i++){
            if(lottos[i] === 0) zero++;
        }
        if(lottos.length === 6 && zero === 1) return [6,6];
        if(lottos.length === 6 && zero === 0) return [6,6];
        else if(zero === 6) return [1,6]
        
        
    }
    return [7-(6-lottos.length)-zero, 7-(6-lottos.length)];
}