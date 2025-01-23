import sys
from math import *
sys.stdin = open('programmers/완-요격시스템/input.txt')
# https://school.programmers.co.kr/learn/courses/30/lessons/181188


def solution(targets):
    shooting_count = 0
    targets.sort(key = lambda x: [x[1], x[0]])
    
    end_point = 0
    for cur_target in targets:
        if cur_target[0] >= end_point:
            shooting_count += 1
            end_point = cur_target[1]

    return  shooting_count 
    
input = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]
solution(input)