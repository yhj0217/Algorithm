import heapq
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    mixed = 0
    
    while scoville[0] < K:
        if(len(scoville) == 1 and scoville[0] < K):
            return -1
        mixed = heapq.heappop(scoville) + (heapq.heappop(scoville) * 2)
        heapq.heappush(scoville, mixed)
        answer += 1
    return answer