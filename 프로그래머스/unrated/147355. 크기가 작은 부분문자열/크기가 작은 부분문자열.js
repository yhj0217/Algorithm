function solution(t, p) {
    const num = Number(p);
    let count = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        let str = t.substr(i, p.length);
        
        if(Number(str) <= num){
            count += 1;
        }
    }
    
    return count;
}