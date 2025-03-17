package SWEA.algoSWEA;

import java.io.*;
import java.util.*;

public class 수식고치기 {
	static char decodingString(char input, char changeTo) {
		if (input == 'x') {
			return changeTo;
		}
		if (input == 'X') {
			return changeTo == '0' ? '1' : '0';
		}
		return input;
	}

	static char calculation(String willCalced) {
		String[] mustBeZeroCases = { "0&", "&0", "0|0", "1^", "^1" };
		char returnVal = '1';
		for (int caseIdx = 0; caseIdx < 5; caseIdx++) {
			if (willCalced.contains(mustBeZeroCases[caseIdx])) {
				returnVal = '0';
				break;
			}
		}
		return returnVal;
	}

	public static void main(String[] args) throws IOException {
		BufferedReader bfReader = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer stToken;

		int T = Integer.parseInt(bfReader.readLine());

		for (int testCase = 1; testCase <= T; testCase++) {
			String inputString = bfReader.readLine();
			int inputLen = inputString.length();
			char[] inputArray = new char[inputLen];
			char resultZero = ' ', resultOne = ' ';

			for (int x = 0; x < 2; x++) {
				String strStack = "";
				for (int i = 0; i < inputLen; i++) {
					stToken = new StringTokenizer(inputString);
					char input = stToken.nextToken().charAt(i);
					inputArray[i] = decodingString(input, (char) (x + '0'));
				}

				for (int i = 0; i < inputLen; i++) {
					char curTarget = inputArray[i];
					if (curTarget == ')') {
						int sliceStart = strStack.length() - 4, sliceEnd = strStack.length();

						String willCalced = strStack.substring(sliceStart, sliceEnd);
						strStack = strStack.substring(0, sliceStart) + calculation(willCalced);
					} else {
						strStack += curTarget;
					}
				}
				
				if (x == 0) {
					resultZero = strStack.charAt(0);
					strStack = "";
				} else {
					resultOne = strStack.charAt(0);
					strStack = "";
				}
			}
			if(resultZero == resultOne) {
				System.out.println("#" + testCase + " 0");
			} else {
				System.out.println("#" + testCase + " 1");
			}
		}
	}
}
