function solution(my_string) {
    let word = my_string.split(" ");
    return word.filter(word=> word !== "");
}