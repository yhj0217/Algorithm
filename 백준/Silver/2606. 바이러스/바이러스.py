import sys
n = int(sys.stdin.readline())
m = int(sys.stdin.readline())
cpu = [1]
connection = []

for _ in range(m):
    x, y = map(int, sys.stdin.readline().split())
    connection.append((x, y))

while True:
    length_before = len(cpu)
    for x, y in connection:
        if x in cpu and y not in cpu:
            cpu.append(y)
        elif y in cpu and x not in cpu:
            cpu.append(x)
    if length_before == len(cpu):
        break

print(len(cpu) - 1)
