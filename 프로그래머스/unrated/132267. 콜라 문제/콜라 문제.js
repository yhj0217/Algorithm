function solution(a, b, n) {
    let answer = 0;
    while(n>=a){
        let coke = Math.floor(n/a);
        answer += coke * b
        n = coke * b + Math.floor(n % a)
    }
    
    return answer;
}