import sys

sys.stdin = open("backjoon/완-10989-수정렬하기3/input.txt", "r")

N = int(sys.stdin.readline())
basket = [0] * 10001

for i in range(N):
    basket[int(sys.stdin.readline())] += 1

for i in range(10001):
    if basket[i] != 0:
        for j in range(basket[i]):
            print(i)


# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
# 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다.
# 둘째 줄부터 N개의 줄에는 수가 주어진다.
# 이 수는 10,000보다 작거나 같은 자연수이다.

# 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
# **
# 1
# 1
# 2
# 2
# 3
# 3
# 4
# 5
# 5
# 7
# *#

# 풀이법:
# 매로리를 미리 만들어 놓음.
# 10000개까지 주어질 수 있으니 10000개의 매모리를 미리 만듦.
