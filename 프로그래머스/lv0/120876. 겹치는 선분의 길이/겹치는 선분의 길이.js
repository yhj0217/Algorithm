function solution(lines) {
  var answer = 0;
  let base = new Array(200);
  base.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      base[j + 100] += 1;
    }
  }

  for (let i in base) {
    if (base[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}