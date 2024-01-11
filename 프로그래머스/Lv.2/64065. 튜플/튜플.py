from collections import Counter
def solution(s):
    answer = []
    nums = list(s.replace('{','').replace('}','').split(','))
    cnt = Counter(nums)
    
    most_common_numbers = cnt.most_common()


    for number, count in most_common_numbers:
        answer.append(int(number))
    return answer
