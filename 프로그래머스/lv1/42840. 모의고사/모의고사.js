function solution(answers) {
    let answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    
    let f = 0;
    let s = 0;
    let t = 0;
    
    for(let i = 0; i<answers.length; i++){
        if(one[i % 5] == answers[i]) f+=1;
        if(two[i % 8] == answers[i]) s+=1;
        if(three[i % 10] == answers[i]) t+=1;
    }
    
    let max = Math.max(f,s,t);
    if(f == max) answer.push(1);
    if(s == max) answer.push(2);
    if(t == max) answer.push(3);
    
    return answer;
}