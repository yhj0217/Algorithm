def solution(numLog):
    answer = ''
    num_list = list(numLog)
    for i in range(1, len(num_list)):
        if num_list[i]-1==num_list[i-1]:
            answer = answer + 'w'
        elif num_list[i]+1==num_list[i-1]:
            answer = answer + 's'
        elif num_list[i]-10==num_list[i-1]:
            answer = answer + 'd'
        elif num_list[i]+10==num_list[i-1]:
            answer = answer + 'a'
    return answer