function solution(s) {
    var answer = '';
    answer = s.split(' ').map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ');
    return answer;
}