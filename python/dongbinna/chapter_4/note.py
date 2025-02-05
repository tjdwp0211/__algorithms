def minSortBySelect():
    arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
    print(f'[BEFORE] SELECT_SORT: {arr}')

    for i in range(len(arr)):
        minIdx = i
        for j in range(i, len(arr)):
            if arr[minIdx] > arr[j]:
                minIdx = j
        arr[i], arr[minIdx] = arr[minIdx], arr[i]

    print(f'[AFTER] SELECT_SORT: {arr}', end='\n')


def minSortByInsert():
    arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
    print(f'[BEFORE] INSERT_SORT: {arr}')

    for i in range(1, len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j - 1], arr[j] = arr[j], arr[j - 1]
            else:
                break

    print(f'[AFTER] INSERT_SORT: {arr}', end='\n')

def minQuickSort():
    arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]
    print(f'[BEFORE] QUICK_SORT: {arr}')

    def quickSort(array, startIdx, endIdx):
        # 정렬 범위가 1인 경우 종료
        if startIdx >= endIdx:
            return
        pivot = startIdx
        left, right = startIdx + 1, endIdx

        while left <= right:
            # pivot 보다 큰 데이터를 찾을 때까지 반복
            while left <= endIdx and array[left] <= array[pivot]:
                left += 1
            # pivot 보다 작은 데이터를 찾을 때까지 반복
            while right > startIdx and array[right] >= array[pivot]:
                right -= 1

            # 엇갈렸다면, 작은 데이터와 피벗을 교체 (참고: 엇갈리게 되면, right 가 더 작은 값이 됨.)
            if left > right:
                array[pivot], array[right] = array[right], array[pivot]
            # 아니라면, 작은 데이터와 큰 데이터를 교체
            else:
                array[left], array[right] = array[right], array[left]
        # 왼쪽과 오른쪽으로 분할 후, 각각 정렬 수행
        quickSort(array, startIdx, right - 1)
        quickSort(array, right + 1, endIdx)

    def otherQuickSort(array):
        if len(array) <= 1:
            return array
        pivot = array[0]
        tail = array[1:]

        leftSide = [x for x in tail if x <= pivot]
        rightSide = [x for x in tail if x > pivot]

        return otherQuickSort(leftSide) + [pivot] + otherQuickSort(rightSide)

    # quickSort(arr, 0, len(arr) - 1)
    # print(f'[AFTER] QUICK_SORT: {arr}', end='\n')

    print(f'[AFTER] QUICK_SORT: {otherQuickSort(arr)}')



minSortBySelect()
minSortByInsert()
minQuickSort()