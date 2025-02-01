numberList = list(map(int, list(input())))
numberList.sort()

result = numberList[0]

for i in range(1, len(numberList)):
    if result == 0:
        result += numberList[i]
    else:
        result *= numberList[i]

print(result)