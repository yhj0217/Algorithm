function solution(n, words) {    
    for(let i=1; i<words.length; i++){
        let word = words[i];
        if(words.indexOf(word) !== i) return [i % n + 1, Math.floor(i/n) + 1];
        
        let last = words[i - 1].slice(-1);
        let first = word.slice(0,1);
        if(last !== first) return [i % n + 1, Math.floor(i/n) + 1];
    }

    return [0,0];
}