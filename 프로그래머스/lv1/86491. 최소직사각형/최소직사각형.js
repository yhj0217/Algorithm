function solution(sizes) {
    let width = [];
    let height = [];
    
    for(let i = 0; i<sizes.length; i++){
        if(sizes[i][0]<sizes[i][1]){
            width.push(sizes[i][1]);
            height.push(sizes[i][0]);
        }
        else{
            width.push(sizes[i][0]);
            height.push(sizes[i][1]);
        }
    }
    width.sort((a,b)=>b-a);
    height.sort((a,b)=>b-a);
    
    return width[0]*height[0];
}