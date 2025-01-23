import sys

# https://www.acmicpc.net/problem/18236
sys.stdin = open("backjoon/18236-행렬곱셈순서2/input.txt")


T = int(input())
nums = []
basket = []

for i in range(T):
    num_1, num_2 = map(int, input().split())
    if i == 0:
        nums.extend([num_1, num_2])
    else:
        nums.append(num_2)

print(nums)
for i in range(len(nums)):
    A, B, C = nums[i - 2], nums[i - 1], nums[i]
    print(A, B, C)
    basket.append(A * B * C)

print(basket)
sum_eachs = list(map(lambda x: basket[x[0]] + x[1], enumerate(basket)))
print(sum_eachs)
