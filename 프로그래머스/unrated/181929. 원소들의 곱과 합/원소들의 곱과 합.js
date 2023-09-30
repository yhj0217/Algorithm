function solution(num_list) {
    let sum = num_list.reduce((a,b)=>a+b);
    let mult = num_list.reduce((a,b)=>a*b);
    
    if(sum ** 2 > mult) return 1;
    else return 0;
}