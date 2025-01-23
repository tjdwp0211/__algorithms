import sys

sys.stdin = open("backjoon/완-2562-최댓값/input.txt")

nums = [int(input()) for _ in range(9)]
max_v = max(nums)
idx = nums.index(max_v) + 1
print(f"{max_v}\n{idx}")
