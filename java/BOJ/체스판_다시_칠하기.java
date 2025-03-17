package BOJ;

import java.io.*;
import java.util.*;

public class 체스판_다시_칠하기 {

    static int N, M;
    static char[][] matrix;
    static int response = 8 * 8 + 1;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        matrix = new char[N][M];
        for (int i = 0; i < N; i++) {
            String line = br.readLine();
            for (int j = 0; j < M; j++) {
                matrix[i][j] = line.charAt(j);
            }
        }

        for (int row = 0; row <= N - 8; row++) {
            for (int col = 0; col <= M - 8; col++) {
                int curResponse = checkBoard(row, col);

                if (curResponse < response) {
                    response = curResponse;
                }
            }
        }
        System.out.println(response);
    }

    public static int checkBoard(int startRow, int startCol) {
        int curCount = 0;
        char expectColor = matrix[startRow][startCol];
        for (int row = startRow; row < startRow + 8; row++) {
            for (int col = startCol; col < startCol + 8; col++) {
                if (expectColor != matrix[row][col]) {
                    curCount += 1;
                }
                expectColor = toggleColor(expectColor);
            }
            expectColor = toggleColor(expectColor);
        }

        return Math.min(curCount, 64 - curCount);
    }

    public static char toggleColor(char color) {
        return color == 'W' ? 'B' : 'W';
    }


}