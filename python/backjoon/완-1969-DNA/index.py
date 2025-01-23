import sys

sys.stdin = open("backjoon/완-1969-DNA/input.txt")

from collections import defaultdict, Counter

cases, length = map(int, input().split())

DNAs = [input() for _ in range(cases)]
dict_DNAs = defaultdict(str)

for i in range(cases):
    for j in range(length):
        dict_DNAs[j] += DNAs[i][j]

DNAs = ""
hamming_distance = 0
for idx, string in dict_DNAs.items():
    max_s = max(Counter(string).items(), key=lambda x: [x[1], -int(x[0], 32)])
    DNAs += max_s[0]
    for s, cnt in Counter(string).items():
        if s != max_s[0]:
            hamming_distance += cnt

print(f"{DNAs}\n{hamming_distance}")
