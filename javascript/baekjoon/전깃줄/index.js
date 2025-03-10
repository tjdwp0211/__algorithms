const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [A, B] = [0, 1];

let [N, ...edges] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));
edges = edges.sort((a, b) => a[A] - b[A]);

const dp = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  const selectedEdge = edges[i];

  for (let j = 0; j < i; j++) {
    const previousEdge = edges[j];
    if (previousEdge[B] < selectedEdge[B]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));

/**
 * 이하 시도한 반례.
4
1 4
2 3
3 2
4 1
=> 3

4
1 1
2 2
3 3
4 4
=> 0

4
2 1
3 2
4 3
5 4
=> 0

4
1 2
2 3
3 4
4 5
=> 0

4
1 2
2 3
3 4
4 1
=> 1

4
1 4
2 1
3 2
4 3
=> 1

5
1 1
2 4
3 2
4 3
5 5
=> 1

7
1 2
2 1
3 8
4 5
5 7
6 3
7 6
=> 4

7
1 8
2 2
3 1
4 6
5 4
6 7
7 3
=> 4

49
1 38
2 44
3 45
4 4
5 35
6 27
7 7
8 37
9 14
10 30
11 41
12 49
13 48
14 1
15 42
16 33
17 11
18 10
19 40
20 46
21 34
22 22
23 9
24 3
25 36
26 2
27 26
28 21
29 8
30 19
31 24
32 17
33 18
34 39
35 16
36 5
37 13
38 15
39 28
40 23
41 47
42 6
43 51
44 25
45 12
46 32
47 29
48 31
49 20
=> 39

 */
