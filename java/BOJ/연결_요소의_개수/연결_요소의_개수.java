package BOJ.연결_요소의_개수;

import java.io.*;
import java.util.*;

public class 연결_요소의_개수 {
    static int N, M, response;
    static boolean[][] matrix;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        matrix = new boolean[N + 1][N + 1];
        visited = new boolean[N + 1];

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            matrix[u][v] = true;
            matrix[v][u] = true;
        }

        for (int curNode = 1; curNode < N + 1; curNode++) {
            if (!visited[curNode]) {
//                System.out.println("@@@ INITIATED=" + curNode);
                response += 1;
                dfs(0, curNode);
            }
        }
        System.out.println(response);
    }

    public static void dfs(int depth, int startNode) {
        visited[startNode] = true;
        for (int nextNode = 1; nextNode < N + 1; nextNode++) {
            if (matrix[startNode][nextNode] && !visited[nextNode]) {
//                printVisited("S=" + startNode + " == N=" + nextNode + " is linked\n");
                dfs(depth + 1, nextNode);
            }
        }
    }


    public static void printMatrix(String prefix) {
        StringBuilder br = new StringBuilder();
        br.append(prefix);

        for (int i = 1; i < N + 1; i++) {
            for (int j = 1; j < N + 1; j++) {
                br.append(matrix[i][j] + " ");
            }
            br.append("\n");
        }
        System.out.println(br);
    }

    public static void printVisited(String prefix) {
        StringBuilder br = new StringBuilder();
        br.append(prefix);

        for (int i = 1; i < N + 1; i++) {
            br.append(visited[i] + " ");
        }
        System.out.println(br);
    }

}
