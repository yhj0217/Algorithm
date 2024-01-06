import sys
import heapq

number = int(input())
heap = []

for _ in range(number):
    num = int(sys.stdin.readline())
    if num == 0:
        if len(heap):
            print(heapq.heappop(heap))
        else:
            print(0)
    else:
        heapq.heappush(heap, num)
