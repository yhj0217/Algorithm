function solution(s) {
    let arr = s.split(' ')
    var asw = '';
    
    for(let i=0; i<arr.length; i++){
        asw = arr[i].split('');
        for(let j=0; j<asw.length; j++){
             if(j % 2 == 0){
                 asw[j]=asw[j].toUpperCase();
             }else{
                 asw[j]=asw[j].toLowerCase();
             }
         }
         arr[i]=asw.join('');     
    }
    return arr.join(' ');
}