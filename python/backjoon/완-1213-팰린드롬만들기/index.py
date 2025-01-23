import sys


sys.stdin = open("backjoon/완-1213-팰린드롬만들기/input.txt")

from collections import Counter
from math import *


string = Counter(list(input()))
sorted_string = sorted(string.items(), reverse=True)
basket, odd_s_cnt = [], 0

for i in range(len(sorted_string)):
    s, num = sorted_string[i]
    if num % 2 == 0:
        half_string = s * (num // 2)
        for j in range(num // 2):
            basket.append(s)
            basket.insert(0, s)
    else:
        odd_s_cnt += 1
        for j in range((num - 1) // 2):
            basket.append(s)
            basket.insert(0, s)
        basket.insert(len(basket) // 2, s)
        num = num - (num - 1)

if odd_s_cnt >= 2:
    print("I'm Sorry Hansoo")
else:
    joined = "".join(basket)
    print(joined)
