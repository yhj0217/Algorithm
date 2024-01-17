from collections import Counter

def solution(str1, str2):
    answer = 0
    first,second = [],[]
    for i in range(len(str1)-1):
        if str1[i:i+2].isalpha():
            first.append(str1[i:i+2].lower())
    for i in range(len(str2)-1):
        if str2[i:i+2].isalpha():
            second.append(str2[i:i+2].lower())
            
    counter1 = Counter(first)
    counter2 = Counter(second)
    
    inter = list((counter1 & counter2).elements())
    union = list((counter1 | counter2).elements())
    
    if len(union) == 0:
        return 65536
    else:
        return int((len(inter) / len(union)) * 65536)