import sys
from collections import Counter

sys.stdin = open("SWEA/완-1204-최빈수구하기/input.txt")


T = int(input())

for _ in range(1, T + 1):
    test_case = int(input())
    points = list(map(int, input().split()))
    field, max_point, max_cnt = [0 for _ in range(101)], 0, 0

    for point in points:
        field[point] += 1

    for cur_point, cur_cnt in enumerate(field):
        if max_point < cur_point and max_cnt <= cur_cnt:
            max_point, max_cnt = cur_point, cur_cnt

    print(f"#{test_case} {max_point}")

# ---------------------------Counter 사용---------------------------
# T = int(input())

# for _ in range(1, T + 1):
#     test_case = int(input())
#     docs = sorted(
#         Counter(list(map(int, input().split()))).most_common(),
#         key=lambda x: [-x[1], -x[0]],
#     )
#     print(f"#{test_case} {docs[0][0]}")
