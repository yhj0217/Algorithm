def convert(n,k):
    if k==10:
        return str(n)
    else:
        if n < k:
            return str(n)
        else:
            return str(convert(n // k, k)) + str(n % k)

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
        

def solution(n, k):
    answer = 0
    num = convert(n,k).split('0')
    
    for i in num:
        if i and is_prime(int(i)):
            answer += 1
    return answer