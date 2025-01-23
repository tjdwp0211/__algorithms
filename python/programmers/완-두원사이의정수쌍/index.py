import sys
from math import *
sys.stdin = open('programmers/완-두원사이의정수쌍/input.txt')
# https://school.programmers.co.kr/learn/courses/30/lessons/181187#



def root_func(x, r) : 
    return isqrt(r**2 - x**2)

def dots(r):
    result = 0
    for x in range(1, r):
        result += root_func(x, r)
    return result*4 + 4*r + 1
    # return sum([int(root_func(x,r)) for x in range(1, r)])*4 + 4*r + 1

def dots_circle_line(r):
    result = 0
    for x in range(1, r):
        if(root_func(x, r)**2 + x**2 == r**2):
            result += 1
    return result * 4 + 4
    # return sum([int(root_func(x,r))**2 + x**2 == r**2 for x in range(1, r)]) * 4 + 4

def solution(r1, r2):
    return dots(r2) - dots(r1) + dots_circle_line(r1)




solution(2, 3)
solution(9, 20)
solution(10, 20)
solution(999999, 1000000)

# 2, 4, 40
# 9, 20, 1008
# 10, 20, 952
# 999999, 1000000, 6281440