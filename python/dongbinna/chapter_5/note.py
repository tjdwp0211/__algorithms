# 10 7
# 1 3 5 7 9 11 13 15 17 19
# # 4
#
# 10 7
# 1 3 5 6 9 11 13 15 17 19
# # 원소가 존재하지 않습니다.

from bisect import bisect_left, bisect_right

# 값이 특정 범위에 속하는 데이터 갯수 구하기
def countByRange(leftValue, rightValue):
    array = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9]
    rightIdx = bisect_right(array, rightValue)
    leftIdx = bisect_left(array, leftValue)
    return rightIdx - leftIdx

print(f'값이 4인 데이터 갯수: {countByRange(4, 4)}')
print(f'값이 [-1, 3] 범위인 데이터 갯수: {countByRange(-1, 3)}')



def binarySearch(startIdx, endIdx, array, target):
    if startIdx == endIdx - 1:
        return

    middleIdx = (endIdx + startIdx) // 2

    if tree[middleIdx] == TARGET:
        return middleIdx + 1

    elif tree[middleIdx] > TARGET:
        return binarySearch(startIdx, middleIdx, array, target)

    elif tree[middleIdx] <= TARGET:
        return binarySearch(middleIdx, endIdx, array, target)



N, TARGET = map(int, input().split())
tree = list(map(int, input().split()))
result = binarySearch(0, N - 1, tree, TARGET)

if result:
    print(result)
else:
    print('원소가 존재하지 않습니다.')