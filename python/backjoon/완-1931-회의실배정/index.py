import sys

sys.stdin = open("backjoon/완-1931-회의실배정/input.txt")
import sys

input = sys.stdin.readline

N = int(input())
meetings_table = [list(map(int, input().split())) for _ in range(N)]
open_room = min(meetings_table, key=lambda x: x[0])
close_room = max(meetings_table, key=lambda x: x[1])
meetings_table.sort(key=lambda t: [t[1], t[0], t[1] - t[0]])
result_table = []

for i in range(N):
    req_start, req_end = meetings_table[i]
    if i == 0:
        if req_end == close_room[1]:
            result_table.append(meetings_table[i + 1])
        else:
            result_table.append(meetings_table[i])
    else:
        cur_start, cur_end = result_table[len(result_table) - 1]
        if (not req_start < cur_end) and (not req_end < cur_start):
            result_table.append(meetings_table[i])

print(len(result_table))
