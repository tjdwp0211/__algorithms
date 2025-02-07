def findParent(parents, x):
    if parents[x] != x:
        return findParent(parents, parents[x])
    return x

def findParentWithCompression(parents, x):
    if parents[x] != x:
        parents[x] = findParentWithCompression(parents, parents[x])
    return parents[x]

def unionAB(parents, a, b):
    aParent = findParent(parents, a)
    bParent = findParent(parents, b)
    if aParent < bParent:
        parents[bParent] = aParent
    else:
        parents[aParent] = bParent

