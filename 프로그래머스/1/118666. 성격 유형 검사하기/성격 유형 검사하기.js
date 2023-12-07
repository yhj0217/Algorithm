function solution(survey, choices) {
    let answer = '';
    let mbti = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
    
    for (let i=0; i<survey.length; i++){
        let [a,b] = survey[i].split('');
        
        if(choices[i] === 4) continue;
        else if(choices[i] < 4){
            mbti[a] += (4 - choices[i])
        }
        else if(choices[i] > 4){
            mbti[b] += (choices[i] - 4)
        }
    }
    
    if(mbti["R"] > mbti["T"]){
        answer += "R";
    } else if(mbti["R"] < mbti["T"]){
        answer += "T";
    } else {
        answer += "R";
    }
    
    if(mbti["C"] > mbti["F"]){
        answer += "C";
    } else if(mbti["C"] < mbti["F"]){
        answer += "F";
    } else {
        answer += "C";
    }
    
    if(mbti["J"] > mbti["M"]){
        answer += "J";
    } else if(mbti["J"] < mbti["M"]){
        answer += "M";
    } else {
        answer += "J";
    }
    
    if(mbti["A"] > mbti["N"]){
        answer += "A";
    } else if(mbti["A"] < mbti["N"]){
        answer += "N";
    } else {
        answer += "A";
    }
    return answer;
}