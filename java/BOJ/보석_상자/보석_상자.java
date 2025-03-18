package BOJ.보석_상자;

import java.io.*;
import java.util.*;

public class 보석_상자 {

    static long N, M;
    static long[] values;
    static long response;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        N = Long.parseLong(st.nextToken());
        M = Long.parseLong(st.nextToken());
        values = new long[(int)M];

        long left = 1, right = Long.MIN_VALUE;
        for (int i = 0; i < M; i++) {
            values[i] = Long.parseLong(br.readLine());
            right = Math.max(right, values[i]);
        }

        while (left <= right) {
            long middle = (left + right) / 2;
            long calc = 0;
//            System.out.println("L: " + left + " | M: " + middle + " | R: " + right);
            for (int i = 0; i < M; i++) {
//                System.out.println("CALC: " + calc);
                calc += values[i] / middle;
                if (values[i] % middle != 0) {
                    calc += 1;
                }
            }
//            System.out.println("RES: " + response + " | CALC: " + calc);
            if (calc > N) {
                left = middle + 1;
            } else {
                right = middle - 1;
                response = middle;
            }
//            System.out.println();
        }
        System.out.println(response);
    }
}
