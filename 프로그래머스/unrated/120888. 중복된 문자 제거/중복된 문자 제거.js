function solution(my_string) {
  const charSet = new Set(my_string);
  const result = Array.from(charSet).join('');
  return result;
}
