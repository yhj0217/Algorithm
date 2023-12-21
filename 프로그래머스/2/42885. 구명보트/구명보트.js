function solution(people, limit) {
    let answer = 0;    
    people.sort((a,b)=> b-a);
    let last = people.length-1;
    
    for(let i = 0; i <= last; i++){        
        if(people[i] + people[last] <= limit) last--
        answer++;
    }
    return answer;
}