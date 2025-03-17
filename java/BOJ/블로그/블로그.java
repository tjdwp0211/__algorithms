package BOJ.블로그;

import java.io.*;
import java.util.*;

public class 블로그 {
    static int maxVisited = -Integer.MAX_VALUE;
    static int maxVisitedDay = 0;
    static int N, X;
    static int[] historyList;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");

        N = Integer.parseInt(st.nextToken());
        X = Integer.parseInt(st.nextToken());
        historyList = new int[N];

        st = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < N; i++) {
            historyList[i] = Integer.parseInt(st.nextToken());
        }

        int curVisited = historyList[0];
        for (int i = 1; i < X; i++) {
            curVisited += historyList[i];
        }

        if (curVisited != 0 && maxVisited <= curVisited) {
            if (maxVisited == curVisited) {
                maxVisitedDay += 1;
            } else {
                maxVisited = curVisited;
                maxVisitedDay = 1;
            }
        }

        for (int i = 1; i < N - X + 1; i++) {
//            System.out.println(i + "+" + X + ": " + maxVisited + "vs" + curVisited);
//            System.out.println("PRE="+(i - 1) + ": " + historyList[i - 1]);
//            System.out.println("CUR="+(i + X - 1) + ": " + historyList[i + X - 1]);
//            System.out.println();

            curVisited = curVisited - historyList[i - 1] + historyList[i + X - 1];

            if (curVisited == 0) continue;

            if (maxVisited <= curVisited) {
                if (maxVisited == curVisited) {
                    maxVisitedDay += 1;
                } else {
                    maxVisited = curVisited;
                    maxVisitedDay = 1;
                }
            }
        }



        if (maxVisited == -Integer.MAX_VALUE) {
            System.out.println("SAD");
        } else {
            System.out.println(maxVisited);
            System.out.println(maxVisitedDay);
        }

    }
}
