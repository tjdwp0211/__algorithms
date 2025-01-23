import sys

sys.stdin = open("backjoon/완-1758-알바생강호/input.txt")

N = int(input())
tips, total_tips = [int(input()) for _ in range((N))], 0
tips.sort(key=lambda x: -(x - N))

for idx, tip in enumerate(tips):
    cur_tip = tip - idx

    if cur_tip >= 0:
        total_tips += cur_tip
    else:
        continue

print(total_tips)
