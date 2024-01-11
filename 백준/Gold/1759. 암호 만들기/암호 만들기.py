import sys
import itertools

L, C = map(int, sys.stdin.readline().split())
input = sys.stdin.readline().rstrip()
alp = list(input.split(' '))
alp.sort()

vowels = ['a','e','i','o','u']

def check(password):
    count_vowels = sum([1 for letter in password if letter in vowels])
    count_cons = L - count_vowels
    return count_vowels >= 1 and count_cons >= 2

pw = list(filter(check, itertools.combinations(alp,L)))

for i in pw:
    print(''.join(i))