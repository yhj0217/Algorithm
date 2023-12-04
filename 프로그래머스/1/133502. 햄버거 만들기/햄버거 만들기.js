function solution(ingredient) {
    let answer = 0;
    let ham = [1,2,3,1];
    let stack = [];

    for (let i of ingredient) {
        stack.push(i);
        if (stack.slice(-4).join('') === ham.join('')) {
            stack.splice(-4);
            answer++;
        }
    }
    return answer;
}