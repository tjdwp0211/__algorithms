import sys
sys.stdin = open('SWEA/완-16910-원안의점/input.txt')
# https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AYcllbDqUVgDFASR
from math import *

T = int(input())

for test_case in range(1, T+1):
    radius, dots = int(input()), 0
    
    for x in range(0, radius):
        dots += int(((radius**2)-(x**2))**0.5)
        # 1번: isqrt(num) vs 2번: int(num**0.5)
        # 속도는 1번이 더 빠르지만 메모리를 더 많이 잡아먹는다.
        # 반면 2번은 더 느리지만 메모리를 덜 잡아먹는다.
    
    dots = dots * 4 + 1
    print(f'#{test_case} {dots}')