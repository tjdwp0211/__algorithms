import sys

sys.stdin = open("backjoon/완-13458-시험감독/input.txt")

n, a = int(input()), list(map(int, input().split()))
manager_1, manager_2 = map(int, input().split())
cnt = 0

for i in range(n):
    a[i] = a[i] - manager_1
    cnt += 1
    if a[i] > 0:
        cnt, remain = cnt + (a[i] // manager_2), a[i] % manager_2
        if remain:
            a[i] = remain - manager_2
            cnt += 1
        else:
            a[i] = a[i] - manager_2 * (a[i] // manager_2)

print(cnt)
