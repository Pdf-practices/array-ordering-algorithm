const mergeSort = (arr: Array<number>): Array<number> => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = parseInt(`${arr.length / 2}`) | 0;
  const left = arr.slice(0, middle);
  const rigth = arr.slice(middle);

  const merge = (left: any, rigth: any) => {
    const result = [];
    let i, j;
    i = 0;
    j = 0;

    while (i < left.length && j < rigth.length) {
      result.push(left[i] < rigth[j] ? left[i++] : rigth[j++]);
    }

    return [...result, ...left.slice(i), ...rigth.slice(j)];
  };

  return merge(mergeSort(left), mergeSort(rigth));
};

export default mergeSort;
