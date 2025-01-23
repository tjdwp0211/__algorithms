import sys

sys.stdin = open("backjoon/완-1057-토너먼트/input.txt")

from math import *

T = int(input())


for test_case in range(1, T + 1):
    total_num, A_player, B_player = map(int, input().split())
    round_count = 0

    while ceil(A_player) != ceil(B_player):
        A_player = ceil(A_player / 2)
        B_player = ceil(B_player / 2)
        round_count += 1
    print(round_count)
