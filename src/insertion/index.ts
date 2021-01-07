const OrderingByInseercion = (disorderedArray: Array<number>) => {
   let tempArray, j;
   let l = disorderedArray.length;

   for (let i = 0; i < l; i++) {
      j = i;
      tempArray = disorderedArray[i];

      while (j > 0 && disorderedArray[j - 1] > tempArray) {
         disorderedArray[j] = disorderedArray[j - 1];
         j--;
      }
      disorderedArray[j] = tempArray;
   }

   return disorderedArray;
};

export default OrderingByInseercion;
