package BOJ;

import java.io.*;
import java.util.*;

public class 수열 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stToken;

		int len = Integer.parseInt(br.readLine());
		int[] nums = new int[len];
		int cntStartToEnd = 1, cntEndToStart = 1, result = 1;
		ArrayList<Integer> cntStore = new ArrayList<Integer>();

		stToken = new StringTokenizer(br.readLine());
		for (int i = 0; i < len; i++) {
			nums[i] = Integer.parseInt(stToken.nextToken());
		}

		for (int curInc = 1, curDec = len - 2; 0 <= curDec && curInc < len; curInc++, curDec--) {
			int prevInc = curInc - 1;
			int prevDec = curDec + 1;

			if (nums[prevInc] <= nums[curInc]) {
				cntStartToEnd += 1;
			} else {
				cntStore.add(cntStartToEnd);
				cntStartToEnd = 1;
			}
			if (nums[prevDec] <= nums[curDec]) {
				cntEndToStart += 1;
			} else {
				cntStore.add(cntEndToStart);
				cntEndToStart = 1;
			}
			if (0 == curDec || curInc == len - 1) {
				cntStore.add(cntStartToEnd);
				cntStore.add(cntEndToStart);
			}
		}

		for (int i = 0; i < cntStore.size(); i++) {
			result = Math.max(result, cntStore.get(i));
		}
		System.out.println(result);
	}
}