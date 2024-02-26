export type DowntimeLogs = [Date, Date][];

export function merge(...args: DowntimeLogs[]): DowntimeLogs {
  // Flatten the input logs and sort them by start time
  const sortedLogs = args.flat().sort((a, b) => a[0].getTime() - b[0].getTime());
  const mergedLogs: DowntimeLogs = [];
  for (const log of sortedLogs) {
    const lastMergedLog = mergedLogs[mergedLogs.length - 1];

    if (lastMergedLog && log[0] <= lastMergedLog[1]) {
      // Logs overlap or are contiguous, merge them
      lastMergedLog[1] = new Date(lastMergedLog[1].getTime() > log[1].getTime() ? lastMergedLog[1] : log[1]);
      // console.log(`Merging: ${logToString(log)} with ${logToString(lastMergedLog)}`);
    } else {
      // Logs are disjoint, add the log as is
      mergedLogs.push([...log]);
      // console.log(`Adding: ${logToString(log)}`);
    }
  }

  return mergedLogs;
}

// function logToString(log: DowntimeLogs[0]): string {
//   return `[${log[0].toISOString()}, ${log[1].toISOString()}]`;
// }

// Node Test

// const sample: DowntimeLogs[] = [
//   [[new Date('2020-01-01T00:00:00Z'), new Date('2020-01-01T01:00:00Z')], [new Date('2020-01-02T05:00:00Z'), new Date('2020-01-02T05:30:00Z')]],
//   [[new Date('2020-01-01T17:00:00Z'), new Date('2020-01-01T17:45:00Z')]],
// ]

// console.log(merge(...sample));


