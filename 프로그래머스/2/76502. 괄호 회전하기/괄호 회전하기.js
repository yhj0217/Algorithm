function solution(s) {
    let answer = 0;

    const isCorrect = (str) => {
        let open = ['(', '{', '['];
        let close = [')', '}', ']'];
        let stack = [];

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (open.includes(char)) {
                stack.push(char);
            } else {
                let index = close.indexOf(char);
                if (stack.length === 0 || stack.pop() !== open[index]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    for (let i = 0; i < s.length; i++) {
        if (isCorrect(s)) {
            answer++;
        }
        s = s.slice(1) + s[0];
    }

    return answer;
}
