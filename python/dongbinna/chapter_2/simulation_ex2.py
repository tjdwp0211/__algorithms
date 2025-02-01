import sys
sys.setrecursionlimit(100_000)

# 정수 0 <= N <= 23
# 00:00:00 ~ N:59:59
# 위 시간의 사이에 3이 하나라도 포함된 경우의 수를 구함
# Ex) N = 1
# O: 00:00:03, 00:13:30, ...
# X: 00:02:55, 01:27:45, ...



N = int(input())


threeCase = [3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53]
count = 0

for h in range(N + 1):
    for m in range(60):
        for s in range(60):
            if h in threeCase or m in threeCase or s in threeCase:
                count += 1

print(count)
# ========================================================================
def DFS(h, m, s, count):
    if h == N and m == 59 and s == 59:
        return count

    if '3' in f'{h}{m}{s}':
        count += 1

    s += 1
    if s == 60:
        m, s = m + 1, 0
        if m == 60:
            h, m = h + 1, 0

    return DFS(h, m, s, count)

print(DFS(0, 0, 0, 0))