def solution(numbers, target):
    arr = [0]
    for i in numbers:
        cnt = []
        for j in arr:
            cnt.append(j+i)
            cnt.append(j-i)
        arr = cnt[:]
    return arr.count(target)