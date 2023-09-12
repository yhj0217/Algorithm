function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    
    section.forEach(el=>{
        if(painted < el){
            painted = el + m - 1;
            answer++;
        }
    })
    return answer;
}