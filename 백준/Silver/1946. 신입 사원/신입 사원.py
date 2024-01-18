import sys

input = sys.stdin.readline
t = int(input())

for _ in range(t):
    n = int(input())
    case = []
    cnt = 1
    for _ in range(n):
        case.append(list(map(int,input().split())))
    case.sort()
    cut = case[0][1]

    for i in case:
        if cut > i[1]:
            cnt += 1
            cut = i[1]
    print(cnt)