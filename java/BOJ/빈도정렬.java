package BOJ;

import java.io.*;
import java.util.*;

public class Main_빈도정렬_2910 {
    public static void main(String[] args) throws IOException {
		BufferedReader bfReader = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stToken = new StringTokenizer(bfReader.readLine());

		int N = Integer.parseInt(stToken.nextToken());

		stToken = new StringTokenizer(bfReader.readLine());
		HashMap<Integer, Integer> counter = new HashMap<Integer, Integer>();
		ArrayList<Integer> nums = new ArrayList<Integer>();

		for (int i = 0; i < N; i++) {
			Integer el = Integer.parseInt(stToken.nextToken());

			if (!nums.contains(el)) {
				nums.add(el);
			}
			if (counter.get(el) == null) {
				counter.put(el, 1);
			} else {
				counter.put(el, counter.get(el) + 1);
			}

		}
		Collections.sort(nums, (num1, num2) -> counter.get(num2) - counter.get(num1));
		
		for (int i = 0; i < nums.size(); i++) {
			int targetNum = nums.get(i);
			for (int j = 0; j < counter.get(targetNum); j++) {
				System.out.printf("%d ", targetNum);
			}
		}
	}
}
