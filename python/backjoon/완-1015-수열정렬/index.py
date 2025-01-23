import sys

sys.stdin = open("backjoon/완-1015-수열정렬/input.txt")

T = int(input())


for test_case in range(1, T + 1):
    length = int(input())
    N = list(map(int, input().split()))
    sub_N, basket = sorted(N, key=lambda x: x), []

    for n in N:
        basket.append(sub_N.index(n))
        sub_N[sub_N.index(n)] = -1

    joined = " ".join(list(map(str, basket)))
    print(joined)
