import sys
import heapq

input = sys.stdin.readline
n = int(input())
lec = []
heap = []
for _ in range(n):
    lec.append(list(map(int,input().split())))

lec.sort()
heapq.heappush(heap, lec[0][1])
for i in range(1,n):
    if heap[0] > lec[i][0]:
        heapq.heappush(heap, lec[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, lec[i][1])
print(len(heap))