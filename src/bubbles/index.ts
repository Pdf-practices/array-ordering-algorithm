const OrderByBubbles = (arrayDisordered: Array<number>) => {
   let tempArray = arrayDisordered;
   let reorder = false;

   tempArray.forEach((val: number, key: number) => {
      if (tempArray[key] > tempArray[key + 1] && tempArray.length - 1 != key) {
         let firstNum = tempArray[key];
         let secondNum = tempArray[key + 1];

         tempArray[key] = secondNum;
         tempArray[key + 1] = firstNum;

         reorder = true;
      }
   });

   if (reorder) {
      OrderByBubbles(tempArray);
   }

   return tempArray;
};

export default OrderByBubbles;
