function solution(arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<arr1.length; i++){
        let asw = []
        let row = arr1[i]
        for(let j=0; j<arr2[0].length; j++){
            let sum = 0;
            for(let k=0; k<arr2.length; k++){
                sum += row[k] * arr2[k][j];
            }
            asw.push(sum);
        }
        answer.push(asw)
    }
    return answer;
}