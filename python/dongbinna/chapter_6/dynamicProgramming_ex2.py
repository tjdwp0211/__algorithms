# 정수 X가 주어졌을 때 가능한 연산
# - X % 5
# - X % 3
# - X % 2
# - X -= 1
# end: x == 1
# result: 연산 횟수
# 1 <= X < 30_000
# 입력
# 26
# 25
# 출력
# 3
# 2

X = int(input())

# def greedy(x, depth, prefix):
#     print(f'{prefix}: {x}')
#     if x == 1:
#         return depth
#     splitNumber = list(map(int, list(str(x))))
#
#     if splitNumber[-1] - 1 == 0 or splitNumber[-1] - 1 == 5:
#         return greedy(x - 1, depth + 1, 'minus 1')
#     if splitNumber[-1] % 5 == 0:
#         return greedy(x // 5, depth + 1, 'division 5')
#     if sum(splitNumber) % 3 == 0:
#         return greedy(x //3, depth + 1, 'division 3')
#     else:
#         if x % 2 == 0:
#             return greedy(x // 2, depth + 1, 'division 2')
#         else:
#             return greedy(x - 1, depth + 1, 'else minus 1')
# print(f"GREEDY: {greedy(X, 0, 'ROOT CALL')}")

dpTable = [0] * 30_001

for i in range(2, X + 1):
    # print(f'{i - 1}: {dpTable[:i]}')
    dpTable[i] = dpTable[i - 1] + 1
    if i % 2 == 0:
        dpTable[i] = min(dpTable[i], dpTable[i // 2] + 1)
    if i % 3 == 0:
        dpTable[i] = min(dpTable[i], dpTable[i // 3] + 1)
    if i % 5 == 0:
        dpTable[i] = min(dpTable[i], dpTable[i // 5] + 1)

# print(f'{X}: {dpTable[:X + 1]}')
print(f'BottomUp DP: {dpTable[X]}')