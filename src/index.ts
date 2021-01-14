import OrderByBubbles from "./bubbles/index";
import OrderingByInseercion from "./insertion";
import mergeSort from "./merge";

function main() {
  /**
   * Sorting with the bubble algorithm
   */
  //    let orderBubble = OrderByBubbles([89, 45, 79, 47, 23, 50, 200, 1, 6]);
  //    console.log(orderBubble);

  /**
   * Sorting with the insertion algorithm
   */
  // let orderInsertion = OrderingByInseercion([45, 5, 2, 0, 23, 4]);
  // console.log(orderInsertion);

  /**
   * Sorting with the merge algorithm
   */
  const arr = [45, 5, 2, 0, 23, 4, 54, 76, 3, 293, 100, 41];

  let MergeSort = mergeSort(arr);
  console.log(MergeSort);
}

main();
