function solution(elements) {
  let set = new Set();
  
   for (let start = 0; start < elements.length; start++) {
    for (let length = 1; length <= elements.length; length++) {
      let sum = 0;
      for (let i = start; i < start + length; i++) {
        sum += elements[i % elements.length];
      }
      
      set.add(sum);
    }
  }
  return set.size;
}
