import sys

t = int(sys.stdin.readline().strip())
in_list, out_list = [], []
answer = 0

for i in range(t):
    in_list.append(input())

for i in range(t):
    out_list.append(input())

for i in range(t):
    first = out_list.index(in_list[i])
    for j in range(i):
        last = out_list.index(in_list[j])
        if first < last:
            answer += 1
            break

print(answer)