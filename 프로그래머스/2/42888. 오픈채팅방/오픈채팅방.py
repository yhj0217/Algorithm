def solution(record):
    answer = []
    ids = {}
    
    for order in record:
        ord = order.split()
        if ord[0] =='Enter':
            answer.append('E' + ord[1])
            ids[ord[1]] = ord[2]
        elif ord[0] =='Leave':
            answer.append('L' + ord[1])
        elif ord[0] == 'Change':
            ids[ord[1]] = ord[2]
    
    for i in range(len(answer)):
        if answer[i][0] == 'E':
            answer[i] = ids[answer[i][1:]] + '님이 들어왔습니다.'
        else:
            answer[i] = ids[answer[i][1:]] + '님이 나갔습니다.'
    return answer