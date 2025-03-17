package SWEA.algoSWEA;

import java.io.*;

public class 달팽이숫자 {
    static int[] dCol = { 0, 1, 0, -1 };
	static int[] dRow = { 1, 0, -1, 0 };
	static int[][] arr;
	static int N;
    public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int testCase = 1; testCase <= T; testCase++) {
			N = Integer.parseInt(br.readLine());
			arr = new int[N][N];
			int dir = 0, col = 0, row = 0;
			arr[col][row] = 1;

			for (int value = 2; value <= N * N; value++) {
				col = col + dCol[dir % 4];
				row = row + dRow[dir % 4];
				if (N <= col || col < 0 || N <= row || row < 0 || 0 < arr[col][row]) {
					col -= dCol[dir % 4];
					row -= dRow[dir % 4];
					dir++;
					col += dCol[dir % 4];
					row += dRow[dir % 4];
				}
				arr[col][row] = value;
			}
			System.out.println("#" + testCase);
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					System.out.print(arr[i][j] + " ");
				}
				System.out.println();
			}
		}
    }
}
