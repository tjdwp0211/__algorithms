package BOJ.수_찾기;

import java.io.*;
import java.util.*;

public class 수_찾기 {
    static int N, M;
    static long[] numberList, targetNumberList;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        N = Integer.parseInt(br.readLine());
        numberList = new long[N];
        st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < N; i++) {
            numberList[i] = Long.parseLong(st.nextToken());
        }

        M = Integer.parseInt(br.readLine());
        targetNumberList = new long[M];
        st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < M; i++) {
            targetNumberList[i] = Long.parseLong(st.nextToken());
        }

        Arrays.sort(numberList);
        for (int t = 0; t < M; t++) {
            int isInList = binarySearch(targetNumberList[t]);
            System.out.println(isInList);
        }
    }


    public static int binarySearch(long target) {
        int left = 0, right = N - 1;

        while (left <= right) {
            int middle = (left + right) / 2;

            if (numberList[middle] == target) {
                return 1;
            } else if (numberList[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return 0;
    }

}
