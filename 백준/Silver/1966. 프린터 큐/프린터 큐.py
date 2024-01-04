from collections import deque

test = int(input())

for i in range(test):
    n, target = map(int, input().split())
    deq = deque(map(int, input().split()))

    first = max(deq)

    cnt = 0
    while deq:
        tmp = deq.popleft()
        if first > tmp:
            deq.append(tmp)
            target -= 1
            if target < 0:
                target = len(deq) - 1
        elif first == tmp:
            cnt += 1
            target -= 1
            if deq:
                first = max(deq)
            if target < 0:
                print(cnt)
                break