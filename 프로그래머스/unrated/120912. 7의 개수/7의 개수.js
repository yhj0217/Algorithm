function solution(array) {
    return(array.join().split("").filter((a)=>{return a=="7"}).length)
}