function solution(s) {
    var answer = 0;
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i = 0; i<arr.length; i++){
        s = s.replaceAll(arr[i], i)
    }
    answer = parseInt(s)
    return answer;
}