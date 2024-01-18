import sys

input = sys.stdin.readline
n = int(input())
k = int(input())
sensor = sorted(list(map(int,input().split())))
length = sorted(sensor[i]-sensor[i-1] for i in range(1,n))
print(sum(length[:n-k]))