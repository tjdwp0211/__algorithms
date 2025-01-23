import sys

sys.stdin = open("backjoon/완-1026-보물/input.txt")

length = int(input())
result = 0
A = list(map(int, input().split()))
B = list(map(int, input().split()))

A.sort(reverse=True)
B.sort()

for i in range(length):
    result += A[i] * B[i]

print(result)
