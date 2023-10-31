function solution(spell, dic) {
    var answer = 2;
    spell = spell.sort().join("");    
    
    return dic.map(a => a.split("").sort().join("")).find(a => a===spell) !== undefined ? 1: 2;
}