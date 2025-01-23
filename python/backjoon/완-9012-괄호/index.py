import sys

sys.stdin = open("backjoon/완-9012-괄호/input.txt")

T = int(input())
for test_case in range(T):
    string, stack, warning_count = input(), [], 0
    if len(string) % 2:
        print("NO")
    else:
        for pice in string:
            if pice == "(":
                stack.append(pice)
            elif pice == ")" and len(stack) == 0:
                warning_count += 1
            else:
                stack.pop()
        if stack or warning_count:
            print("NO")
        else:
            print("YES")
