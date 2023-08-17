function solution(n) {
    let num = String(n).split("").reverse().map(i => Number(i));
    return num;
}