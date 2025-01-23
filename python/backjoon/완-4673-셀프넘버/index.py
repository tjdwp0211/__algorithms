import sys

sys.stdin = open("backjoon/완-4673-셀프넘버/input.txt")

T = int(input())


def func(num):
    num_list, comb = list(str(num)), 0
    for n in num_list:
        comb += int(n)
    if num + comb in li:
        li.remove(num + comb)
        return func(num + comb)


li = [i for i in range(1, 10_001)]
for num in li:
    func(num)

for result in li:
    print(result)


# 완-14888-연산자끼워넣기
import sys
from itertools import *

sys.stdin = open("backjoon/완-14888-연산자끼워넣기/input.txt")
n = int(input())
nums = list(map(int, input().split())) + [0]
op_nums = list(map(int, input().split()))
op_list = ["+", "-", "*", "/"]
basket = []
for c in range(len(op_nums)):
    for _ in range(op_nums[c]):
        basket.append(op_list[c])
max_v, min_v = -1_000_000_000, 1_000_000_000

for case in permutations(basket, n - 1):
    result = nums[0]
    for i in range(1, n):
        if case[i - 1] == "+":
            result += nums[i]
        elif case[i - 1] == "-":
            result -= nums[i]
        elif case[i - 1] == "*":
            result *= nums[i]
        elif case[i - 1] == "/":
            result = result // nums[i]
    if max_v < result:
        max_v = result
    if min_v > result:
        min_v = result
print(max_v)
print(min_v)
