const mergeSort = (arr: Array<number>): Array<number> => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = parseInt(`${arr.length / 2}`) | 0;
  const left = arr.slice(0, middle);
  const rigth = arr.slice(middle);

  const merge = (left: any, rigth: any) => {
    const result = [];
    let il, ir;
    il = 0;
    ir = 0;

    while (il < left.length && ir < rigth.length) {
      result.push(left[il] < rigth[ir] ? left[il++] : rigth[ir++]);
    }

    return [...result, ...left.slice(il), ...rigth.slice(ir)];
  };

  return merge(mergeSort(left), mergeSort(rigth));
};

export default mergeSort;
