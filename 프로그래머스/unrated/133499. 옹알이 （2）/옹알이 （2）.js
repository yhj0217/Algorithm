function solution(babbling) {
    let answer = 0;
    const lang = ['aya','ye','woo','ma'];
    
    for(let i = 0; i < babbling.length; i++){
       let bab = babbling[i];
        
       for(let j=0; j<lang.length; j++){
           if(babbling[i].includes(lang[j].repeat(2))) break;
        bab = bab.split(lang[j]).join(" ");
       }
     if(bab.split(" ").join("").length === 0) answer++
    }    
        
    return answer;
}