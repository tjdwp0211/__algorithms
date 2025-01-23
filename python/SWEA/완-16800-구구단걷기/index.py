import sys
from math import *
sys.stdin = open('SWEA/완-16800-구구단걷기/input.txt')

T = int(input())

for test_case in range(1, T + 1):
    destination = int(input())
    start_point = 2
    movement_count = 0
    for i in range(1, int(destination ** 0.5)+1):
    # for i in range(1, isqrt(destination)+1): <-  이걸로 하면 메모리 초과 에러 남
        if(destination % i) == 0:
            movement_count = i
    
    print(f'#{test_case} {(movement_count + destination//movement_count) - start_point}')





# 당신은 무한히 많은 행과 열이 있는 곱셈표 위에 서 있다. (x, y)셀에는 정수 x*y 가 적혀 있다. 
# (만약 행과 열이 9개라면 이는 구구단 표와 동일하다.) 현재 당신의 위치는 셀 (1, 1) 이다.

# 당신은 곱셈표의 오른쪽이나 아래쪽 방향으로 이동할 수 있다. 즉, 당신이 (x, y)에 서 있다면, 
# (x+1, y)나 (x, y+1)로 이동할 수 있다.

# 정수 N이 주어질 때, N이 적혀 있는 어떤 셀에 도착하기 위해서 최소 몇 번 움직여야 하는가?

 

# [입력]
# 첫 번째 줄에 테스트 케이스의 수 TC가 주어진다. 
# 이후 TC개의 테스트 케이스가 새 줄로 구분되어 주어진다. 
# 각 테스트 케이스는 다음과 같이 구성되었다.
#  l 첫 번째 줄에 정수 N이 주어진다. (2 <= N <= 10^12)

# 0  1 2 3 4 5 6 7 8 9
# 1  * @ @ @ @ @ @ @ @
# 2  @ @ @ @ @ @ @ @ @
# 3  @ @ @ @ @ @ @ @ @
# 4  @ @ @ @ @ @ @ @ @
# 5  @ @ @ @ @ @ @ @ @
# 6  @ @ @ @ @ @ @ @ @
# 7  @ @ @ @ @ @ @ @ @
# 8  @ @ @ @ @ @ @ @ @
# 9  @ @ @ @ @ @ @ @ @
# 10 @ @ @ @ @ @ @ @ @

















# ---------------------------------------나의 풀이---------------------------------------
# T = int(input())
# for i in range(1, T + 1):
#     N = int(input())
#     j_movement = 0
#     for j in range(1, int(N ** 0.5) + 1):
#         if (N % j) == 0:
#             j_movement = j
            
#     print(f'#{i} {(N // j_movement + j_movement) - 2}')
# ---------------------------------------나의 풀이---------------------------------------













# ---------------------------------------남의 풀이---------------------------------------
# def getNum(num):
#     ret = 0
#     for i in range(1, int(num**0.5) + 1):
#         if num%i==0:
#             # i가 약수라면 move_in_line_i = i
#             ret = i
#     return ret,num//ret
 
# T = int(input())
# for test_case in range(1, T + 1):
#     N = int(input())
#     i,j = getNum(N)
#     # i 이동거리, j 이동거리 = 함수 return 값
#     ans = i+j-2
#     # ans = 총이동거리 - 시작점
#     print("#"+str(test_case), ans)
# ---------------------------------------남의 풀이---------------------------------------


