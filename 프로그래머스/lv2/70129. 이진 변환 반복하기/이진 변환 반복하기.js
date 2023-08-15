function solution(s) {
    let answer = [0,0]
    while(s !== '1') {
        s = s.split('');
        let cnt = s.filter(a => a === '1').length;
        answer[0] ++;
        answer[1] += s.length - cnt;
        s = cnt.toString(2);
    }

    return answer;
}