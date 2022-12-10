function splitArrayAndCalculate(arr) {
  let list = arr.map((e) => parseInt(e));
  let evenArr = [];
  list.map((e) => {
    if (e % 2 === 0) {
      evenArr.push(e);
      const average1 = evenArr.reduce((a, b) => a + b, 0) / evenArr.length;
      console.log(average1.toFixed(2));
    }
  });
  let oddArr = [];
  list.map((x) => {
    if (x % 2 !== 0) {
      oddArr.push(x);
      const average2 = oddArr.reduce((a, b) => a + b, 0) / oddArr.length;
      console.log(average2.toFixed(2));
    }
  });

  return [evenArr, oddArr];
}
console.log(splitArrayAndCalculate([1, 2, 3, 1, 5616, 112, 13, 1212, 3, 7]));
