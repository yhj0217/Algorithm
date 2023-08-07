function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
                answer.push(numbers[i]+numbers[j]);
        }        
    }
    answer.sort((a,b)=>a-b);
   const newArr = answer.filter((e, i) => {
    return answer.indexOf(e) === i;
   })
    return newArr;
}