import sys

t = int(sys.stdin.readline().strip())

for _ in range(t):
    left = []
    right = []
    input = sys.stdin.readline().strip()

    for i in input:
        if i == '<':
            if left:
                right.append(left.pop())
        elif i == '>':
            if right:
                left.append(right.pop())
        elif i == '-':
            if left:
                left.pop()
        else:
            left.append(i)

    left.extend(reversed(right))
    print(''.join(left))