function solution(num, total) {
    let answer = [];
    let min = Math.ceil(total/num) - Math.floor(num/2)
    let max = Math.floor(total/num) + Math.floor(num/2)
        for(let i = min; i<=max; i++){
            answer.push(i);
        }
    return answer;
}