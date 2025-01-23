import sys

sys.stdin = open("backjoon/완-1546-평균/input.txt")

T = int(input())
nums = list(map(int, input().split()))
print(f"{sum(nums) / max(nums) * 100 / len(nums)}")
