import sys

sys.stdin = open("programmers/여행경로/input.txt")
# https://school.programmers.co.kr/learn/courses/30/lessons/43164

from collections import defaultdict


def solution(tickets):
    routes = defaultdict(list)
    for s, e in tickets:
        routes[s] = routes[s] + [e]

    for key in routes.keys():
        routes[key].sort(reverse=True)

    basket = ["ICN"]
    location = []

    while basket:
        start_point = basket[-1]
        # print(basket)
        if start_point not in routes or len(routes[start_point]) == 0:
            # routes의 key에 start_point가 있는가 없는가
            location.append(basket.pop())
        else:
            basket.append(routes[start_point][-1])
            routes[start_point] = routes[start_point][:-1]

    return location[::-1]


test1 = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
# ["ICN", "JFK", "HND", "IAD"] O
test2 = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]
# ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] O
test3 = [["ICN", "JFK"], ["ICN", "AAD"], ["JFK", "ICN"]]
# ["ICN", "JFK", "ICN", "AAD"]
test4 = [
    ["ICN", "BOO"],
    ["ICN", "COO"],
    ["COO", "DOO"],
    ["DOO", "COO"],
    ["BOO", "DOO"],
    ["DOO", "BOO"],
    ["BOO", "ICN"],
    ["COO", "BOO"],
]
# ["ICN", "BOO", "DOO", "BOO", "ICN", "COO", "DOO", "COO", "BOO"]
print(solution(test4))
