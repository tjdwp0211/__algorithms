import sys
sys.stdin = open('programmers/완-단속카메라/input.txt')
# https://school.programmers.co.kr/learn/courses/30/lessons/42884

def solution(routes:list[int]):
    camera_end_point, camera_count = -30000, 0
    routes.sort(key = lambda x: x[1])
    
    for cur_route in routes:
        if (cur_route[0] <= camera_end_point <= cur_route[1]) == False:
            camera_count += 1
            camera_end_point = cur_route[1]

    return camera_count

input = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]]
solution(input)

# sorted(a, key = lambda x : x[0]) 
# 위 코드는 x[0]을 우선순위로 정렬하는 것이다.
# sorted(a, key = lambda x : [x[0], x[1]]) 
# 위 코드는 x[0]을 우선 순위로 정렬하고, x[0]이 같으면 x[1]을 확인한다.
# 더 작은 수부터 큰 수로 정렬한다.

# for cur_route in routes:
# vs
# for cur_route in range(len(routes)):
# 둘의 차이점은?