# 떡의 길이는 일정하지 않다.
# 절단기에 높이(H) 지정
# ex)
# 떡 길이: [19, 14, 10, 17], 절단기 높이: 15
# 떡 길이: [15, 14, 10, 15], 절단기 높이: 15
# 잘린 떡: [4, 0, 0, 2] -> 손님께 6 제공
# 손님 요청 길이 M -> 적어도 M만큼 떡을 얻기 위한
# 절단기의 최대 높이값(H)

# 1 <= 떡의 갯수 (N) <= 1,000,000
# 1 <= 손님 요청 길이 (M) <= 2,000,000,000
# 단, 떡 N개의 총합은 항상 M이 만족한다.
# 0 <= H <= 1,000,000,000

# 4 6
# 19 15 10 17
# 4 6
# 10 10 10 10

N, M = map(int, input().split())
ddeoks = list(map(int, input().split()))
ddeoks.sort(reverse=True)
result = -1e9

def binarySearch(start, end, depth):
    global result

    if start == end - 1:
        return result

    cutLength, curHeight = 0, (start + end) // 2

    for ddeok in ddeoks:
        cut = ddeok - curHeight
        if cut > 0: cutLength += cut
    # print(f'{depth} = S: {start} / M: {curHeight} / E: {end}')
    # print(f'H: {curHeight} => CUT: {cutLength}')
    # print()


    if cutLength >= M:
        result = max(result, curHeight)
        if cutLength == M:
            return result

    if cutLength > M:
        return binarySearch(curHeight, end, depth + 1)
    else:
        return binarySearch(start, curHeight, depth + 1)


print(binarySearch(0, max(ddeoks), 0))