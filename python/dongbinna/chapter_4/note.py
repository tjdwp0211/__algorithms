array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

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

    print(f'[AFTER] QUICK_SORT: {arr}', end='\n')

minSortBySelect()
minSortByInsert()