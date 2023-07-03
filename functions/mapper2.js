const testData = [...Array(100)].map((_, i) => Number(i));

export const runMapper = () => {
  // one liners
  let mapped = testData.map((t) => t ** 2);
  let filtered = testData.filter((t) => testData.includes(Math.sqrt(t)));
  let some = testData.some((t) => t === 25);
  let every = testData
    .filter((t) => testData.includes(Math.sqrt(t)))
    .every((t) => t === Math.sqrt(t) ** 2);
  let average = testData.reduce((a, b) => a + b, 0) / testData.length;

  // for based
  let mapped2 = null;
  let filtered2 = null;
  let some2 = null;
  let every2 = null;
  let average2 = null;

  console.log({ mapped, filtered, some, every, average });
  console.log({ mapped2, filtered2, some2, every2, average2 });
};
