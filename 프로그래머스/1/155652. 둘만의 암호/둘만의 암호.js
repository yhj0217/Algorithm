function solution(s, skip, index) {
    let answer = '';
    let code = skip.split('');
    let arr = s.split('');
    
    arr.map((alp) => {
        let x = alp.charCodeAt();
        for(var i = 0; i < index; i++){
            x++;
            code.forEach((y)=>{
                if(String.fromCodePoint(x) == y){
                    x++;
                    if(x > 122){
                         x = 97;
                    }
                }
            })
            code.forEach((y)=>{
                if(String.fromCodePoint(x) == y){
                    x++;
                    if(x > 122){
                         x = 97;
                    }
                }
            })
            if(x > 122){
                x = 97;
            }
            code.forEach((y)=>{
                if(String.fromCodePoint(x) == y){
                    x++;
                    if(x > 122){
                         x = 97;
                    }
                }
            })
            
        }
        answer += String.fromCodePoint(x);
    })
    return answer;
}