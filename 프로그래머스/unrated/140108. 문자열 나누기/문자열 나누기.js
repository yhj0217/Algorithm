function solution(s) {
    let answer = 0;
    let x=0;
    let y=0;
    let str = '';
    
    for(let char of s){
        if(str === '')str = char;
        if(str === char) x++;
        else y++;
        
        if(x === y){
            answer++;
            x = 0;
            y = 0;
            str = ''; 
        }
        
    }
    if(str !== '') answer++;
    
    return answer;
}