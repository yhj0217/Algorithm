function solution(numbers) {
    let answer = 0;
    var num = [1,2,3,4,5,6,7,8,9];
    let a = num.filter(x => !numbers.includes(x));
    for (let i=0; i<a.length; i++){
        answer += a[i];
    }
    return answer;
}