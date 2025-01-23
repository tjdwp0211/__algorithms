import sys

sys.stdin = open("backjoon/완-1013-contact/input.txt")
import re

T = int(input())

for test_case in range(1, T + 1):
    N = input()
    regex = re.compile("(100+1+|01)+").fullmatch(N)

    if regex:
        print("YES")
    else:
        print("NO")
