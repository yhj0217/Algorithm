function solution(x, n) {
    var answer = [];
    let srt = x;
    for(let i=0; i<n; i++){
        answer.push(x);
        x+=srt;
    }
    return answer;
}