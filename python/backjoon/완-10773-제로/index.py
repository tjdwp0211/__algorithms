import sys

sys.stdin = open("backjoon/완-10773-제로/input.txt")


T = int(input())

stack = []

for i in range(T):
    num = int(sys.stdin.readline())
    if num != 0:
        stack.append(num)
    else:
        stack.pop()

print(sum(stack))
