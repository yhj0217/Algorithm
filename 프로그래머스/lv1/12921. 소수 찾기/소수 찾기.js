function primeNum(num) {
    if(num === 2 || num === 3) return true
    let sqrtNum = Math.floor(Math.sqrt(num))
    for(let i=2; i<=sqrtNum;i++){
        if(num % i === 0) return false
    }
    return true
    }

function solution(n) {
    var answer = 0;
    for(let i=2; i<=n;i++){
        if(primeNum(i)) ++answer
    }
    return answer;
}

