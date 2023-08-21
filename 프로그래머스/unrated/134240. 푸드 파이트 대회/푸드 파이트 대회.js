function solution(food) {
    let answer = [0];
    
    for(let i = food.length; i>0; i--){
        let half = Math.floor(food[i] / 2);
        for(let j = 0; j<half; j++){
            answer.push(i);
            answer.unshift(i);
        }
    }
    return answer.join('');
}