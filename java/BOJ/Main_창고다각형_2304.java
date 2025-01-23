package BOJ;

import java.io.*;
import java.util.*;

public class Main_창고다각형_2304 {
	static int calculation(int[][] arr, int maxHeight) {
		int curRow = arr[0][0], curCol = arr[0][1], returnVal = 0;
		for (int i = 1; i < arr.length; i++) {
			if (curCol <= arr[i][1]) {
				int width = Math.abs(arr[i][0] - curRow);
				int height = curCol;
				returnVal += width * height;
				curRow = arr[i][0];
				curCol = arr[i][1];
			}
		}
		return returnVal;
	}

	public static void main(String[] args) throws IOException {
		BufferedReader bfReader = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(bfReader.readLine());
		int[][] buildings = new int[N][2];
		int result = 0, maxHeight = 0;

		for (int i = 0; i < N; i++) {
			String building = bfReader.readLine();
			StringTokenizer stToken = new StringTokenizer(building);
			int row = Integer.parseInt(stToken.nextToken());
			int col = Integer.parseInt(stToken.nextToken());
			buildings[i] = new int[] { row, col };
			maxHeight = Math.max(maxHeight, col);
		}

		Arrays.sort(buildings, (b1, b2) -> b1[0] - b2[0]);

		int point = 0;
		for (int i = 0; i < N; i++) {
			if (buildings[i][1] == maxHeight) {
				point = i;
			}
		}

		int[][] leftSideBuildings = new int[point + 1][2];
		for (int increase = 0; increase < point + 1; increase++) {
			leftSideBuildings[increase] = buildings[increase];
		}
		result += calculation(leftSideBuildings, maxHeight);

		int[][] rightSideBuildings = new int[N - point][2];
		for (int decrease = N - 1; decrease >= point; decrease--) {
			int rangeZeroToPoint = N - 1 - decrease;
			rightSideBuildings[rangeZeroToPoint] = buildings[decrease];
		}
		result += calculation(rightSideBuildings, maxHeight);

		System.out.println(result + maxHeight);

	}
    
}
