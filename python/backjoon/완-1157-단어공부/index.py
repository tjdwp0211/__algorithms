import sys

sys.stdin = open("backjoon/완-1157-단어공부/input.txt")

from collections import Counter

sorted_string = sorted(Counter(input().upper()).items(), key=lambda x: -x[1])
max_s, max_cnt = sorted_string[0]

if max_cnt in [cnt for s, cnt in sorted_string[1 : len(sorted_string)]]:
    print("?")
else:
    print(f"{max_s}")
