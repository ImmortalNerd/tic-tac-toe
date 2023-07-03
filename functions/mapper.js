const testData = [...Array(100)].map((_, i) => Number(i));

export const runMapper = () => {
  // one liners
  let mapped = testData.map((t) => t ** 2);
  let filtered = testData.filter((t) => testData.includes(Math.sqrt(t)));
  let some = testData.some((t) => t === 25);
  let filterFunction = (t) => testData.includes(Math.sqrt(t));
  let everyFunction = (t) => t === Math.sqrt(t) ** 2;
  let every = testData.filter(filterFunction).every(everyFunction);
  let average = testData.reduce((a, b) => a + b, 0) / testData.length;

  // for based
  // let mapped = testData.map((t) => t ** 2);
  let mapped2 = [];
  for (let num of testData) {
    mapped2.push(num ** 2);
  }
  // let filtered = testData.filter((t) => testData.includes(Math.sqrt(t)));
  let filtered2 = [];
  for (let num of testData) {
    let sqr = Math.sqrt(num);
    if (testData.includes(sqr)) filtered2 = [...filtered2, num];
  }
  // let some = testData.some((t) => t === 25);
  let some2 = null;
  for (let num of testData) {
    if (num === 25) some2 = true;
  }
  // let filterFunction = (t) => testData.includes(Math.sqrt(t));
  // let everyFunction = (t) => t === Math.sqrt(t) ** 2;
  // let every = testData.filter(filterFunction).every(everyFunction);
  let every2 = true;
  for (let num of testData) {
    let sqr = Math.sqrt(num);
    if (testData.includes(sqr)) {
      if (num !== sqr ** 2) every2 = false;
    }
  }
  let sum = testData.reduce((sum, num) => sum + num, 0);

  let max = testData.reduce((max, num) => {
    if (max < num) {
      return num;
    } else {
      return max;
    }
  }, 0);
  let min = testData.reduce((min, num) => {
    if (min > num) {
      return num;
    } else {
      return min;
    }
  }, 0);

  // let average = sum / testData.length;
  // let sum = 0;
  // for (let num of testData) {
  //   sum = sum + num;
  // }
  // let sum = testData.reduce((sum, num) => {
  //   let a = [...sum, 2];
  //   a.push(5);
  //   return a.concat([7]);
  // }, []);
  // let sum = [];
  // for (let num of testData) {
  //   let a = [...sum, 2];
  //   a.push(5);
  //   sum = a.concat([7]);
  // }
  let average2 = sum / testData.length;
  // results
  console.log({ mapped, filtered, some, every, average });
  console.log({ mapped2, filtered2, some2, every2, average2 });

  //standard deviation
  let standardDeviation = null;
  //for based

  let bSum = 0;
  for (let num of testData) {
    let b = (num - average2) ** 2;
    bSum = bSum + b;
  }
  let variance = bSum / (testData.length - 1);
  standardDeviation = Math.sqrt(variance);
  console.log({ standardDeviation });
  // reduce
  let standardDeviation2 = null;
  let variance2 =
    testData.reduce((b2Sum, num) => b2Sum + (num - average) ** 2, 0) /
    (testData.length - 1);
  standardDeviation2 = Math.sqrt(variance2);
  console.log({ standardDeviation2 });
};
