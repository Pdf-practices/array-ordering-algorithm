const selectionSort = (arr: Array<number> = [12, 45, 1, 890]) => {
  for (let i = 0; i < arr.length; ++i) {
    let j = i;
    let jMin = i;

    for (++j; j < arr.length; ++j) {
      arr[j] < arr[jMin] && (jMin = j);
    }

    [arr[i], arr[jMin]] = [arr[jMin], arr[i]];
  }

  return arr;
};

export default selectionSort;
