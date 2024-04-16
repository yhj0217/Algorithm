def solution(numbers):
    answer = []
    
    for i in numbers:
        if i % 2 == 0:
            answer.append(i+1)
        else:
            num = list('0' + bin(i)[2:])
            idx = ''.join(num).rfind('0')
            num[idx],num[idx+1] = '1','0'
            answer.append(int(''.join(num),2))
            
    return answer