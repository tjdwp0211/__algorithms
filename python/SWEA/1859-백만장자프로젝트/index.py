import sys
from math import *
sys.stdin = open('SWEA/1859-백만장자프로젝트/input.txt')

from math import *
 
T = int(input())
 
# for test_case in range(1, T + 1):
#     day, prices_input = int(input()), list(map(int, input().split()))
#     prices_input = prices_input.reverse()
#     result, max_price = 0, 0
#     stack = []
    
 
#     for cur_price in prices_input:
#         if(cur_price > max_price):
#             while stack:
#                 buying_price = stack.pop()
#                 result += max_price - buying_price
                
#             max_price = cur_price
        
#         stack.append(cur_price)
 
#     for remain in stack: result += max_price - remain 
        
        
#     print(f'#{test_case} {result}')



for test_case in range(1, T+1):
    array_len, a = int(input()), list(map(int,input().rstrip().split(" ")))
    a, stack = a[::-1], []
    max_price, result = 0, 0
    
    for i in range(len(a)):
        value = a[i]
        if value > max_price:
            while stack:
                buying_price = stack.pop()
                result += max_price - buying_price
            max_price = value
        stack.append(value)
    
    print(stack)
    for i in stack:
        result += max_price - i
        
    print(f'#{test_case} {result}')

    
    



# 1     2   0
# -10 -17   -5

# 1     2       0
# -3    -8      10

#  1     2   0   1   0
# -1    -2   4   3   5
