const args = process.argv;
const timerIntervals = args.slice(2);
const sortedIntervals = timerIntervals.sort();

const timer = function(arr) {
  if (arr.length === 0) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (Number(arr[i]) * 1000));
  }
  return;
};

timer(sortedIntervals);