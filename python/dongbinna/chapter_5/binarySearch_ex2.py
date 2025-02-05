# N개의 원소를 포함하고 있는 수열
# 수열: 오름차순 정렬
# ex)
# 수열: { 1, 1, 2, 2, 2, 2, 3 }
# x = 2
# 수열의 값이 2인 원소가 4개이므로 4를 출력.
# 1 <= N <= 1,000,000
# -10^9 <= x <= 10^9
# -1,000,000,000 <= x <= 1,000,000,000
# 단, 이 문제는 시간 복잡도 O(logN)을 설계해야 함.

from bisect import bisect_left, bisect_right
import time

# 7 2
# 1 1 2 2 2 2 3
start = time.time()
N, X = map(int, input().split())
permutation = list(map(int, input().split()))

WORST_CASE_N, WORST_CASE_X = 1_000_000, 0
WORST_CASE_PERMUTATION = [0 if i < 10 else i for i in range(WORST_CASE_N)]

# =======================other solution=================================
def countByRange(leftValue, rightValue, arr):
    rightIdx = bisect_right(arr, rightValue)
    leftIdx = bisect_left(arr, leftValue)
    return rightIdx - leftIdx

result = countByRange(WORST_CASE_X, WORST_CASE_X, WORST_CASE_PERMUTATION)
print(result)

end = time.time()
print(f'{end - start:.5f} sec')
# =======================other solution=================================
# def bisectLeft(x, idx, arr):
#     if idx == len(arr) - 1:
#         return -1
#
#     if arr[idx] == x:
#         return idx
#     return bisectLeft(x, idx + 1, arr)
#
# def bisectRight(x, idx, arr):
#     if idx == -1:
#         return -1
#
#     if arr[idx] == x:
#         return idx
#     return bisectRight(x, idx - 1, arr)
#
#
# left = bisectRight(WORST_CASE_X, WORST_CASE_N - 1, WORST_CASE_PERMUTATION)
# right = bisectLeft(WORST_CASE_X, 0, WORST_CASE_PERMUTATION)
#
# if left == -1 and right == -1:
#     print(-1)
# else:
#     print(right - left + 1)
#
# end = time.time()
# print(f'{end - start:.5f} sec')