import sys

sys.stdin = open("SWEA/1959-두개의숫자열/input.txt")

T = int(input())


def matching_arrs(short: list, long: list):
    global N, M
    dif_len, basket_for_calced = abs(N - M), []

    for i in range(dif_len + 1):
        calced, cutted_long = [], long[i : i + len(short)]

        for j in range(len(short)):
            calced.append(short[j] * cutted_long[j])

        basket_for_calced.append(sum(calced))

    return basket_for_calced


for test_case in range(1, T + 1):
    N, M = map(int, input().split())
    A, B = list(map(int, input().split())), list(map(int, input().split()))
    max_value = 0

    if N < M:
        max_value = max(matching_arrs(short=A, long=B))
    else:
        max_value = max(matching_arrs(short=B, long=A))

    print(f"#{test_case} {max_value}")
