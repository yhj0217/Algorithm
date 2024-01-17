import sys

input = sys.stdin.readline
t = int(input().rstrip())

for _ in range(t):
    n = int(input().rstrip())
    nums = []
    for _ in range(n):
        nums.append(input().rstrip())
    nums.sort()
    TF = True
    for i in range(len(nums)-1):
        if nums[i+1].startswith(nums[i]):
            TF = False
            break
    if TF:
        print('YES')
    else:
        print('NO')
