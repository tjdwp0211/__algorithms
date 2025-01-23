import sys

sys.stdin = open("backjoon/완-10162-전자레인지/input.txt")


initail_T = input()
if int(initail_T[len(initail_T) - 1]) != 0:
    print(-1)
else:
    T = int(initail_T)
    buttons = [300, 60, 10]
    click_cnt = [0, 0, 0]

    while T > 0:
        all_cases = [T - buttons[0], T - buttons[1], T - buttons[2]]
        for i in range(len(all_cases)):
            if all_cases[i] < 0:
                all_cases[i] = 10_001

        min_value = min(all_cases)
        click_cnt[all_cases.index(min_value)] += 1
        T = T - buttons[all_cases.index(min_value)]

    click_cnts = " ".join(list(map(str, click_cnt)))
    print(click_cnts)
