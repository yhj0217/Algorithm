function solution(id_list, report, k) {
    const answer = [];
    const reporter = {};
    const count_list = {};
    
    id_list.forEach(user_id => {
        reporter[user_id] = [];
        count_list[user_id] = 0;
    });
    
    report.forEach(name => {
        const [user_id, report_id] = name.split(" ");
        if (!reporter[user_id].includes(report_id)) {
            reporter[user_id].push(report_id);
        }
    });
    
    Object.keys(reporter).forEach(key => {
        reporter[key].forEach(report_id => {
            count_list[report_id]++;
        });
    });
    
    Object.keys(reporter).forEach(key => {
        let count = 0;
        reporter[key].forEach(report_id => {
            if (count_list[report_id] >= k) {
                count++;
            }
        });
        answer.push(count);
    });
    
    return answer;
}
