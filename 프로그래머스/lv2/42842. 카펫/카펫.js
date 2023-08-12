function solution(brown, yellow) {
    let answer = [];
    const total = brown + yellow;
    for(let i = 1; i<=total; i++){
        if(total % i == 0){
            let j = total / i;
            if((i-2) * (j-2) == yellow)
                answer = [i,j]
        }
    }
    return answer;
}