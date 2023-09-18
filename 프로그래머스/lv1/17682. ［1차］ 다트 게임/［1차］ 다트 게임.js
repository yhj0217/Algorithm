function solution(dartResult) {
    let answer = [];
    let num = '';
    let cnt = 0;
    let list = dartResult.split('');
    for(let i=0; i<list.length; i++){
        if (isNaN(list[i]) === false) num += list[i];
        if (list[i] === 'S') {
            answer.push(parseInt(num));
            num = '';
        } else if (list[i] === 'D') {
            answer.push(Math.pow(parseInt(num),2));
            num = '';
        } else if (list[i] === 'T') {
            answer.push(Math.pow(parseInt(num),3));
            num = '';
        } else if (list[i] === '*') {
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2;
        } else if (list[i] === '#') {
            answer[answer.length - 1] *= (-1);
        }
    }
    return answer.reduce((a,b)=> a+b);
}