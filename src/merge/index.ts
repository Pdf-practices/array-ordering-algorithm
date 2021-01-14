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

// Es un algoritmo que ordena arrays dividiendo en la mitad
const mergeSort = (arr: Array<number>): Array<number> => {
  //Esta condicional verifica si el array tiene la cantidad de valores suficiente para realizar el ordebanamiento
  if (arr.length < 2) {
    return arr;
  }

  //Saca la mitad del valor de la raiz
  const middle = parseInt(`${arr.length / 2}`) | 0;
  const left = arr.slice(0, middle);
  const rigth = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(rigth));
};

export default mergeSort;
