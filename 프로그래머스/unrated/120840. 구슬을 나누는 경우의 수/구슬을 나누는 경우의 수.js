function solution(balls, share) {
    var answer = 0;

    answer = (factorial(balls)/(factorial(balls-share)*factorial(share)));

    return Math.round(answer);
}

function factorial(n) {
    var result = 1;
    for(var i=2; i<=n; i++) result *= i;
    return result;
}