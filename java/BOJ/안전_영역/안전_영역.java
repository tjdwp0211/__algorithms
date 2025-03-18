package BOJ.안전_영역;

import java.io.*;
import java.util.*;

public class 안전_영역 {
    static int N, response = 1, minHeight = Integer.MAX_VALUE, maxHeight = Integer.MIN_VALUE;
    static int[] DIR_ROW = {-1, 1, 0, 0}, DIR_COL = {0, 0, -1, 1};
    static int[][] matrix, markedMatrix;
    static Queue<Node> queue = new LinkedList<Node>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        N = Integer.parseInt(br.readLine());
        matrix = new int[N][N];
        markedMatrix = new int[N][N];



        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            for (int j = 0; j < N; j++) {
                matrix[i][j] = Integer.parseInt(st.nextToken());
                maxHeight = Math.max(maxHeight, matrix[i][j]);
                minHeight = Math.min(minHeight, matrix[i][j]);
            }
        }

        for (int rainHeight = minHeight; rainHeight <= maxHeight; rainHeight++) {
            markedMatrix = markingMatrix(rainHeight);

            int curRemain = 0;
            for (int i = 0; i < (N * N); i++) {
                int row = i / N, col = i % N;
                if (markedMatrix[row][col] == 0) continue;
                curRemain += BFS(row, col);
            }

            response = Math.max(response, curRemain);
        }

        System.out.println(response);
    }

    public static int BFS(int startRow, int startCol) {
        queue.offer(new Node(startRow, startCol));
        markedMatrix[startRow][startCol] = 0;

        while (!queue.isEmpty()) {
            Node cur = queue.poll();

            for (int d = 0; d < 4; d++) {
                int nextRow = cur.row + DIR_ROW[d], nextCol = cur.col + DIR_COL[d];

                if (nextRow < 0 || N <= nextRow || nextCol < 0 || N <= nextCol) continue;
                if (0 < markedMatrix[nextRow][nextCol]) {
                    queue.offer(new Node(nextRow, nextCol));
                    markedMatrix[nextRow][nextCol] = 0;
                }
            }
        }

        return 1;
    }

    public static int[][] markingMatrix(int rainHeight) {
        int[][] matrixForWrite = new int[N][N];

        for (int i = 0; i < N * N; i++) {
            int row = i / N, col = i % N;

            if (matrix[row][col] <= rainHeight) {
                matrixForWrite[row][col] = 0;
            } else {
                matrixForWrite[row][col] = matrix[row][col];
            }
        }

        return matrixForWrite;
    }

    public static class Node {
        int row, col;

        Node (int row, int col) {
            this.row = row;
            this.col = col;
        }
    }
}
