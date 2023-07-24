function solution(n, arr1, arr2) {
    var answer = [];
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; i<n; i++){
        num1 = arr1[i].toString(2).padStart(n, '0');
        num2 = arr2[i].toString(2).padStart(n, '0');
        let arr = [];
        for(let j = 0; j < n; j++){
            if(num1[j] == '0' && num2[j] == '0'){
                arr.push(' ');}
            else
                arr.push('#');
        }
        answer.push(arr.join(''));
    }
    return answer;
}