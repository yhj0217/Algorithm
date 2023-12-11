function solution(today, terms, privacies) {
    var answer = [];
    
    let t_year = today.split('.')[0];
    let t_month = today.split('.')[1];
    let t_day = today.split('.')[2];
    
    let terms_alp = [];
    let terms_month = [];
    
    terms.forEach(x => {
        terms_alp.push(x.split(' ')[0]);
        terms_month.push(x.split(' ')[1]);
    })
    
    privacies.forEach((y,index) => {
        let privacie = y.split(' ');
        let year = privacie[0].split('.')[0];
        let month = privacie[0].split('.')[1];
        let day = privacie[0].split('.')[2];
        let alp = privacie[1];
        let limit = terms_month[terms_alp.indexOf(alp)];        
        let total = 0;
        
        total = (t_year - year) * 12 * 28 + (t_month - month) * 28 + (t_day - day)
        
        if((limit * 28) <= total) answer.push(index+1)
    })
    
    return answer;
}