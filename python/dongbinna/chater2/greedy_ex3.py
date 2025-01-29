# N명 있음
# 공포도가 X인 모험가는 반드시 X명 이상으로 구성된 모험가 그룸에 참여
# 여행을 떠날 수 있는 그룹 수의 최댓값 구하기
# 또한, 몇명의 모험가는 마을에 그대로 남아 있어도 됨.

N = int(input())
guild = list(map(int, input().split()))
guild.sort()

result = 0
count = 0

for i in guild:
    count += 1
    if count >= i:
        result += 1
        count = 0

print(result)