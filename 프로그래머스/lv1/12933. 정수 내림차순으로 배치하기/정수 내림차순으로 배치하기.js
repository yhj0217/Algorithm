function solution(n) {
    var answer = 0;
    answer = String(n).split("").sort(function(a,b){ return b-a}).join("");
    return parseInt(answer);
}