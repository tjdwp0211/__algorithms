package BOJ;

import java.io.*;

public class 기술연계마스터임스 {
    
	public static void main(String[] args) throws IOException {
		BufferedReader bfReader = new BufferedReader(new InputStreamReader(System.in));

		int successCnt = 0;
		int sCnt = 0, lCnt = 0;
		int N = Integer.parseInt(bfReader.readLine());
		char[] skills = bfReader.readLine().toCharArray();

		for (int i = 0; i < N; i++) {
			if ('1' <= skills[i] && skills[i] <= '9') {
				successCnt += 1;
			} else {
				if (skills[i] == 'S') {
					sCnt += 1;
				}
				if (skills[i] == 'L') {
					lCnt += 1;
				}
				if (skills[i] == 'K') {
					if (sCnt > 0) {
						sCnt -= 1;
						successCnt += 1;
					} else break;
				}
				if (skills[i] == 'R') {
					if (lCnt > 0) {
						lCnt -= 1;
						successCnt += 1;
					} else break;
				}
			}
		}
		System.out.println(successCnt);
	}

}
