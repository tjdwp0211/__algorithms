import sys
sys.stdin = open('backjoon/완-122779-상품is뭔들/input.txt', 'r')

from math import *

a, b = map(int, input().split())
all_common_multiple, all_comments = isqrt(b)-isqrt(a), b-a
numerator = all_common_multiple//gcd(all_common_multiple, all_comments)
denominator = all_comments//gcd(all_common_multiple, all_comments)
if all_common_multiple == 0: print(f'{0}')
else: print(f'{numerator}/{denominator}')


# input = list(map(int, input().split()))
# numbers_between_a_and_b = list(range(input[0], input[1] + 1))

# numbers_between_a_and_b.remove(input[0])

# odd_divisor_list = []

# for i in range(len(numbers_between_a_and_b)):
#     divisor_nums = 0
#     list_nums = list(range(1, numbers_between_a_and_b[i] + 1))
    
#     for j in range(len(list_nums)):
#         if (max(list_nums) % list_nums[j]) == 0:
#             divisor_nums += 1
    
#     if(divisor_nums % 2) == 1:
#         odd_divisor_list.extend([numbers_between_a_and_b[i]])
#         print(odd_divisor_list)

# print(f'{len(odd_divisor_list)}/{len(numbers_between_a_and_b)}')
