import sys
n = int(sys.stdin.readline())
tower = list(map(int, sys.stdin.readline().split()))
stack = []
answer = [0] * n

for i in range(n-1, -1, -1):
    while stack and tower[stack[-1]] < tower[i]:
        index = stack.pop()
        answer[index] = i + 1
    stack.append(i)

print(' '.join(map(str, answer)))
