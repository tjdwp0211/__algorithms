package SWEA.algoSWEA;

import java.io.*;
import java.util.*;

public class Main_괄호짝짓기_1218 {
    static Stack<String> stack;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		for (int testCase = 1; testCase <= 10; testCase++) {
			int N = Integer.parseInt(br.readLine());
			char[] strs = br.readLine().toCharArray();

			stack = new Stack<String>();
			for (int i = 0; i < N; i++) {
				if (stack.isEmpty()) {
					stack.add(Character.toString(strs[i]));
					continue;
				}
				String merged = stack.peek() + strs[i];
				boolean itsGood = merged.equals("()") || merged.equals("{}") || merged.equals("[]")
						|| merged.equals("<>");
				if (itsGood) {
					stack.pop();
					continue;
				} 
				stack.add(Character.toString(strs[i]));
			}
			System.out.println("#" + testCase + " " + (stack.size() > 0 ? 0 : 1));
		}
	}

}
