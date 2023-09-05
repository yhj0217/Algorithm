function solution(n) {
    var answer = []
    let div = 2
    while(n !== 1) {
        if(n%div === 0) {
            answer.push(div)
            n/=div
        }
        else {
            div += 1
        }
    }
    return [...new Set(answer)]
}