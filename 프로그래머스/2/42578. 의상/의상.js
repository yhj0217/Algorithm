function solution(clothes) {
    let answer = 1;
    let cloth = clothes.reduce((acc,cur) =>{
        let key = cur[1];
        if(key in acc) {
            acc[key]++;
        } else {
            acc[key] = 1;
        }
        return acc
    },{});
    
    for(let key in cloth){
        answer *= (cloth[key]+1);
    }
    
    return answer - 1;
}