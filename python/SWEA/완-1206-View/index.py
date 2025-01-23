import sys

sys.stdin = open("SWEA/완-1206-View/input.txt")

for test_case in range(1, 11):
    N = int(input())
    bilding_heights = list(map(int, input().split()))
    result = 0

    for i in range(2, N - 2):
        left_max = max(bilding_heights[i - 2 : i])
        right_max = max(bilding_heights[i + 1 : i + 3])
        if left_max < bilding_heights[i] and right_max < bilding_heights[i]:
            max_in_left_right = max(left_max, right_max)
            result += bilding_heights[i] - max_in_left_right

    print(f"#{test_case} {result}")
