function solution(bandage, health, attacks) {
    let fullhp = health;
    let time = attacks[attacks.length - 1][0];
    let idx = 0;
    let cnt = 1;
    
    for(let i=1; i<=time; i++){
        if(i === attacks[idx][0]){
            health -= attacks[idx][1];
            if(health <= 0){
                return -1;
                break;
            }            
        idx++;
        cnt = 1;
        }
        else {
            health = Math.min(fullhp, health + bandage[1])
            if(cnt === bandage[0]){
                health = Math.min(fullhp, health + bandage[2])
                cnt = 1;
            }
            else cnt++;
        }
    }
    return health;
}