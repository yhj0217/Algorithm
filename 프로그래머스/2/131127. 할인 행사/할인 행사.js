function solution(want, number, discount) {
    let answer = 0;
    
    for(let day = 0; day <= discount.length - 10; day++){
        let basket = want.reduce((obj, key, idx) => {
        obj[key] = number[idx];
        return obj;
    }, {})
        for(let i=day; i<10+day; i++){
            if(basket.hasOwnProperty(discount[i]) && basket[discount[i]] > 0) basket[discount[i]] -= 1


        }
        if(Object.values(basket).every(val => val === 0)) {
            answer++
        }
    }    
    return answer;
}