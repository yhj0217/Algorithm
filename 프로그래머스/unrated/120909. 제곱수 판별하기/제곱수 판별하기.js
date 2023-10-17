function solution(n) {
    var answer = 0;
    const sqrt = Math.sqrt(n);
    return sqrt % 1 === 0 ? 1 : 2;
}