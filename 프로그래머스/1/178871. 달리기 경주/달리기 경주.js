function solution(players, callings) {
    let grade = {};
  
    players.forEach((player, i) => {
        grade[player] = i;
    });

    for (let i = 0; i < callings.length; i++) {
        let index = grade[callings[i]];
        let before = players[index-1];
      
        players[index-1] = callings[i];
        players[index] = before;      
        grade[callings[i]] = index - 1;
        grade[before] = index;
    }
    
    return players;
}