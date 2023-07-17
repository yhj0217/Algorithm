function solution(polynomial) {
    var arr = polynomial.split(" + ");
    let answer = '';
    let xNum = 0;
    let num = 0;
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i].includes('x')){
           const delX = arr[i].split('x');
            if(delX[0] == ''){
                xNum += 1;
            }
            else
                xNum += parseInt(delX);        
           }
        else
            num += parseInt(arr[i]);
    }
    
    if(xNum == 0){
        if(num == 0)
            return '0'
        else
            return num.toString();
    }
    else if(xNum == 1){
        if(num == 0)
            return 'x'
        else
            return 'x' + ' + ' + num.toString();
    }
    else
        if(num == 0)
            return xNum.toString() + 'x'
        else
            return xNum.toString() + 'x' + ' + ' + num.toString();
}