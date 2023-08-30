function solution(a, b) {
    let answer = 0;
    let day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let month = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    for(let i = 0; i < a-1; i++){
        answer += month[i];
    }
    return day[(answer+b - 1) % 7];
}