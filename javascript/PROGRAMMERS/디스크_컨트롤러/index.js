class Job {
  constructor(cost, reqTime) {
    this.cost = cost;
    this.reqTime = reqTime;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  compareTo(the, other) {
    if (the.cost < other.cost) {
      return -1;
    } else if (the.reqTime < other.reqTime) {
      return 0;
    }
    return 1;
  }

  heapPush(job) {
    if (this.size() === 0) {
      this.items.push(job);
      return job;
    }

    this.items.push(job);
    this.items.sort((a, b) => this.compareTo(a, b));
    return job;
  }

  poll() {
    return this.items.shift();
  }
}

function solution(jobs) {
  return (function main() {
    const LEN = jobs.length;
    const sortedJobs = jobs.sort((a, b) => a[0] - b[0]);

    const pq = new PriorityQueue();
    let [timer, sum] = [0, 0];
    while (sortedJobs.length > 0 || !pq.isEmpty()) {
      while (sortedJobs.length > 0 && sortedJobs[0][0] <= timer) {
        const [reqTime, cost] = sortedJobs.shift();
        pq.heapPush(new Job(cost, reqTime));
      }

      if (!pq.isEmpty()) {
        const { cost, reqTime } = pq.poll();
        timer += cost;
        sum += timer - reqTime;
      } else {
        timer = sortedJobs[0][0];
      }
    }

    return Math.floor(sum / LEN);
  })();
}
