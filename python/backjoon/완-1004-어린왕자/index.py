import sys
sys.stdin = open('backjoon/완-1004-어린왕자/input.txt')

from math import *

def check_dot_in_circle(start_end_point, cir_c_point, r):
    result = 0
    cx, cy = cir_c_point
    for dot in start_end_point:
        dotTodot = isqrt(((cx-dot[0])**2 + ((cy-dot[1])**2)))
        if dotTodot < r: result += 1
    if(result == 2): return 0
    else: return result

T = int(input())

for i in range(0, T):
    x1, y1, x2, y2 = map(int, input().split())
    start_to_end = isqrt(((x1-y1)**2 + ((x2-y2)**2)))
    
    planet_num = int(input())
    planet_infos = [list(map(int, input().split())) for _ in range(planet_num)]
    
    in_out_count = 0
    
    for planet in planet_infos:
        cx, cy, r = planet
        start_end_list = [[x1, y1], [x2, y2]]
        in_out_count += check_dot_in_circle(start_end_list, [cx, cy], r)
        
    print(in_out_count)