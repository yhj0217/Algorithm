function solution(n) {
    let answer = [];
    for(let i = 0; i < n; i++) answer.push([])
    
    let num = 1;
    let width = 0;
    let height = 0;
    
    for (let i = n; i > 0; i -= 2) {
        for (let j = 0; j < i; j++) {
          answer[height][width] = num;
            num++;
            width++;
        }
        width--;
        height++;
        
        for (let j = 0; j < i - 1; j++) {
          answer[height][width] = num;
            num++;
            height++;
        }
        height--;
        width--;
        
        for (let j = 0; j < i - 1; j++) {
          answer[height][width] = num;
            num++;
            width--;
        }
        width++;
        height--;
        
        for (let j = 0; j < i - 2; j++) {
          answer[height][width] = num;
            num++;
            height--;
        }
        height++;
        width++;
  }
  
  return answer;
}