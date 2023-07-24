function solution(quiz) {
    var answer = [];
    let arr = [];
    for(let i = 0; i<quiz.length; i++){
        arr = quiz[i].split(' ');
        console.log(arr)
        if(arr[1] == '+'){
            if(parseInt(arr[0]) + parseInt(arr[2]) == parseInt(arr[4]))
                answer.push("O");
            else
                answer.push("X");
            }
        else{
            if(parseInt(arr[0]) - parseInt(arr[2]) == parseInt(arr[4]))
                answer.push("O");
            else
                answer.push("X");
            }        
    }
    return answer;
}