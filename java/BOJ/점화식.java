package BOJ;

import java.io.*;

public class Main_점화식_13699 {
    public static void main(String[] args) throws IOException {
		BufferedReader bfReader = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.parseInt(bfReader.readLine());
		long[] dpArr = new long[N + 1];
		dpArr[0] = 1;

		for (int i = 0; i < N; i++) {
			long willAppend = 0;
			for (int t = 0; t <= i; t++) {
				int increase = t, decrease = i - t;
				willAppend += dpArr[increase] * dpArr[decrease];
			}
			dpArr[i + 1] = willAppend;
		}
		System.out.println(dpArr[dpArr.length - 1]);
	}
}
