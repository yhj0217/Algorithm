function solution(park, routes) {
    let answer = [0,0];
    let width = park[0].length - 1;
    let height = park.length - 1;
    let coor = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };
    
    park.forEach((val,i) => {
        for(let j = 0; j < val.length; j++){
            if(park[i][j] === 'S') answer = [i,j]
        }
    })
    
    routes.forEach((route) => {
        let dir = route.split(' ')[0];
        let move = parseInt(route.split(' ')[1])
        let [y,x] = answer
        let tf = true;
        
        for(let k = 0; k < move; k++){
            y += coor[dir][0];
            x += coor[dir][1];
            
            if (y < 0 || height < y || x < 0 || width < x || park[y][x] === 'X') {
                tf = false;
                break;
            }
        }
        if(tf) answer = [y,x];  
    })
    return answer;
}
