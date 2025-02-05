# 피보나치 함수 (재귀함수)
# def fibo(x):
#     if x == 1 or x == 2:
#         return 1
#     return fibo(x - 1) + fibo(x - 2)
# print(fibo(4))

# TOP_DOWN: =============피보나치 함수 (DP)=============
topDownDPTable = [0] * 100

def topDownDPFibo(x, prefix):
    # print(f'{prefix} = {x}: {topDownDPTable}')
    if x == 1 or x == 2:
        return 1
    if topDownDPTable[x] != 0:
        # print(f'[IN IF] {prefix} = {x} is {topDownDPTable[x]}')
        return topDownDPTable[x]
    # print(f'[PRE] {prefix} = {x} is {topDownDPTable[x]}')
    topDownDPTable[x] = topDownDPFibo(x - 1, 'arg is x-1') + topDownDPFibo(x - 2, 'arg is x-2')
    # print(f'[POST] {prefix} = {x} is {topDownDPTable[x]}')
    return topDownDPTable[x]

print(f"TOP_DOWN: {topDownDPFibo(99, 'ROOT CALL')}")
# TOP_DOWN: =============피보나치 함수 (DP)=============

# BOTTOM_UP: =============피보나치 함수 (DP)=============
bottomUpDPTable = [0] * 100
bottomUpDPTable[1] = 1
bottomUpDPTable[2] = 1

def bottomUpDPFibo(x):
    for i in range(3, x + 1):
        bottomUpDPTable[i] = bottomUpDPTable[i - 1] + bottomUpDPTable[i - 2]
    return bottomUpDPTable[x]

print(f'BOTTOM_UP: {bottomUpDPFibo(99)}')
# BOTTOM_UP: =============피보나치 함수 (DP)=============
