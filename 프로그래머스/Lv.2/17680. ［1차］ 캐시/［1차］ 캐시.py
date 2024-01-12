def solution(cacheSize, cities):
    answer = 0
    cache = []
    
    for i in cities:
        i = i.lower()
        if cacheSize:
            if i in cache:
                answer += 1
                cache.pop(cache.index(i))
                cache.append(i)
            else:
                answer += 5
                if len(cache) == cacheSize:
                    cache.pop(0)
                cache.append(i)
        else:
            answer += 5
                
    return answer