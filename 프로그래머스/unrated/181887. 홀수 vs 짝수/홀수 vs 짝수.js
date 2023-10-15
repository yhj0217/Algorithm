function solution(num_list) {
    let odd = 0;
    let even = 0;
    for(let i=0; i<num_list.length; i+=2){
        odd += num_list[i];
    }
    for(let i=1; i<num_list.length; i+=2){
        even += num_list[i];
    }
    if(odd>even) return odd;
    else return even
}