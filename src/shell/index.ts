const shellSort = (arr: Array<number>) => {
  const gap = arr.length;
  let h = 1;

  while (h < gap / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < gap; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
        [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
      }
    }
    h = (h - 1) / 3;
  }

  return arr;
};

export default shellSort;
